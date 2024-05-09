import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./config";

export function useStorage() {
  async function upload(file: Blob) {
      const id = uuidv4();
    const uploadRef = ref(storage, "images/" + id + "jpg");

    const snapshot = await uploadBytes(uploadRef, file);

    return await getDownloadURL(snapshot.ref);
  }

  return { upload };
}
