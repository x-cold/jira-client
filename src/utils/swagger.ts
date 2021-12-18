export function formatProperty(property: unknown): Blob | string {
  if (property instanceof Blob) {
    return property;
  }
  if (typeof property === 'object' && property !== null) {
    return JSON.stringify(property);
  }
  return `${property}`;
}

export function createFormData(input: Record<string, unknown>): FormData {
  return Object.keys(input || {}).reduce((formData, key) => {
    const property = input[key];
    formData.append(
      key,
      formatProperty(property),
    );
    return formData;
  }, new FormData());
}
