export function encode(value: string) {
  return encodeURIComponent(value)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}

export function removeUndefinedProperties(obj: Record<string, any>): Record<string, any> {
  return Object.entries(obj)
    .filter(([, value]) => typeof value !== 'undefined')
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key]: value }), {});
}

export function paramSerializer(parameters: Record<string, any>): string {
  const parts: string[] = [];

  Object.entries(parameters).forEach(([key, value]) => {
    if (value === null || typeof value === 'undefined') {
      return undefined;
    }

    if (Array.isArray(value)) {
      // eslint-disable-next-line no-param-reassign
      value = value.join(',');
    }

    if (value instanceof Date) {
      // eslint-disable-next-line no-param-reassign
      value = value.toISOString();
    } else if (value !== null && typeof value === 'object') {
      // eslint-disable-next-line no-param-reassign
      value = JSON.stringify(value);
    }

    parts.push(`${encode(key)}=${encode(value)}`);

    return undefined;
  });

  return parts.join('&');
}
