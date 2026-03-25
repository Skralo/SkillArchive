export interface UploadPayload {
  name: string;
  type: string;
  size: number;
}

export function validateListingFile(file: UploadPayload, acceptedTypes: string[]) {
  if (!acceptedTypes.includes(file.type)) {
    throw new Error(`Invalid file type for ${file.name}`);
  }
  if (file.size > 8 * 1024 * 1024) {
    throw new Error(`${file.name} exceeds 8MB upload limit`);
  }
  return true;
}
