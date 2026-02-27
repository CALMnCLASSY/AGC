// ============================================
// Simple Logger Utility
// ============================================

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

function formatTimestamp(): string {
  return new Date().toISOString();
}

function log(level: LogLevel, source: string, message: string, data?: unknown): void {
  const timestamp = formatTimestamp();
  const prefix = `[${timestamp}] [${level}] [${source}]`;

  switch (level) {
    case 'ERROR':
      console.error(`${prefix} ${message}`, data ?? '');
      break;
    case 'WARN':
      console.warn(`${prefix} ${message}`, data ?? '');
      break;
    case 'DEBUG':
      if (process.env.NODE_ENV === 'development') {
        console.debug(`${prefix} ${message}`, data ?? '');
      }
      break;
    default:
      console.log(`${prefix} ${message}`, data ?? '');
  }
}

export const logger = {
  info: (source: string, message: string, data?: unknown) => log('INFO', source, message, data),
  warn: (source: string, message: string, data?: unknown) => log('WARN', source, message, data),
  error: (source: string, message: string, data?: unknown) => log('ERROR', source, message, data),
  debug: (source: string, message: string, data?: unknown) => log('DEBUG', source, message, data),
};

export default logger;
