import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class PhotoServicioService {
  IMAGE_DIR = Directory.Data;

  platform: Platform;
   
  constructor(platform: Platform) {
    this.platform = platform;
    this.foto = [];
  }


   public foto: NewPhoto[] = [];

  public async tomar_foto() {
    this.foto = [];

    const nueva_foto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 100
    });

    const jpg = await this.savePicture(nueva_foto);
    this.foto.unshift(jpg!);
  }

  private async savePicture(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    const fileName = new Date().getTime() + '.jpeg';

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if(this.platform.is('hybrid')){

      return {
        name: fileName,
        data: Capacitor.convertFileSrc(savedFile.uri)
      }

    }else{

      return {
        name: fileName,
        data: base64Data
      }

    }
   }

   private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path!
      });
  
      return file.data;
    }
    else{
        const response = await fetch(photo.webPath!);
        const blob = await response.blob();
 
        return await this.convertBlobToBase64(blob) as string;
    }
  }


  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

export interface NewPhoto {
  name: string,
  data: string;
}