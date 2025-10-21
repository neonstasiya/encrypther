/**
 * Performance Monitoring Utility
 * 
 * Tracks Core Web Vitals and logs performance metrics.
 * Useful for debugging and optimization.
 * 
 * Core Web Vitals:
 * - LCP (Largest Contentful Paint): < 2.5s (good), < 4s (needs improvement), > 4s (poor)
 * - FID (First Input Delay): < 100ms (good), < 300ms (needs improvement), > 300ms (poor)
 * - CLS (Cumulative Layout Shift): < 0.1 (good), < 0.25 (needs improvement), > 0.25 (poor)
 */

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fcp?: number;
}

const metrics: PerformanceMetrics = {};
const DEBUG = import.meta.env.DEV; // Only log in development

/**
 * Log metric with color coding
 */
function logMetric(name: string, value: number, thresholds: { good: number; needsImprovement: number }): void {
  if (!DEBUG) return;
  
  const status = value <= thresholds.good ? '✅ Good' : 
                 value <= thresholds.needsImprovement ? '⚠️ Needs Improvement' : 
                 '❌ Poor';
  
  console.info(`[Performance] ${name}: ${value.toFixed(2)}ms - ${status}`);
}

/**
 * Track Largest Contentful Paint (LCP)
 */
function trackLCP(): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      
      if (lastEntry) {
        metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        logMetric('LCP (Largest Contentful Paint)', metrics.lcp, { good: 2500, needsImprovement: 4000 });
      }
    });
    
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (error) {
    if (DEBUG) console.warn('[Performance] LCP tracking not supported:', error);
  }
}

/**
 * Track First Input Delay (FID)
 */
function trackFID(): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metrics.fid = entry.processingStart - entry.startTime;
        logMetric('FID (First Input Delay)', metrics.fid, { good: 100, needsImprovement: 300 });
      });
    });
    
    observer.observe({ type: 'first-input', buffered: true });
  } catch (error) {
    if (DEBUG) console.warn('[Performance] FID tracking not supported:', error);
  }
}

/**
 * Track Cumulative Layout Shift (CLS)
 */
function trackCLS(): void {
  try {
    let clsValue = 0;
    
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metrics.cls = clsValue;
        }
      });
      
      if (metrics.cls !== undefined) {
        logMetric('CLS (Cumulative Layout Shift)', metrics.cls, { good: 0.1, needsImprovement: 0.25 });
      }
    });
    
    observer.observe({ type: 'layout-shift', buffered: true });
  } catch (error) {
    if (DEBUG) console.warn('[Performance] CLS tracking not supported:', error);
  }
}

/**
 * Track Time to First Byte (TTFB)
 */
function trackTTFB(): void {
  try {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      logMetric('TTFB (Time to First Byte)', metrics.ttfb, { good: 800, needsImprovement: 1800 });
    }
  } catch (error) {
    if (DEBUG) console.warn('[Performance] TTFB tracking not supported:', error);
  }
}

/**
 * Track First Contentful Paint (FCP)
 */
function trackFCP(): void {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
          logMetric('FCP (First Contentful Paint)', metrics.fcp, { good: 1800, needsImprovement: 3000 });
        }
      });
    });
    
    observer.observe({ type: 'paint', buffered: true });
  } catch (error) {
    if (DEBUG) console.warn('[Performance] FCP tracking not supported:', error);
  }
}

/**
 * Get all metrics
 */
export function getMetrics(): PerformanceMetrics {
  return { ...metrics };
}

/**
 * Log summary of all metrics
 */
export function logSummary(): void {
  if (!DEBUG) return;
  
  console.group('[Performance] Summary');
  console.table(metrics);
  console.groupEnd();
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (!DEBUG) return;
  
  try {
    console.info('[Performance] Monitoring enabled (development mode only)');
    
    trackTTFB();
    trackFCP();
    trackLCP();
    trackFID();
    trackCLS();
    
    // Log summary after page load
    if (document.readyState === 'complete') {
      setTimeout(logSummary, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(logSummary, 1000);
      });
    }
  } catch (error) {
    console.error('[Performance] Error initializing performance monitoring:', error);
  }
}

// Auto-initialize in development
if (DEBUG) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPerformanceMonitoring);
  } else {
    initPerformanceMonitoring();
  }
}

