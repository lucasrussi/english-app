
interface storagedInterface {
  questionId:number,
  responseId:number
}

export default class Storage {

  private keyResponseStorage:string = '';

  setKeyResponseStorage(key:string){
    this.keyResponseStorage = key
  }

  getKeyResponseStorage(){
    return this.keyResponseStorage
  }

  getResponseStorage():storagedInterface[]{

    const storagedData:string | null = localStorage.getItem(this.keyResponseStorage);

    if(storagedData){
      return JSON.parse(storagedData);
    }else{
     return [];
    }
  }

  setReponseStorage(obj:storagedInterface){
    localStorage.setItem(this.keyResponseStorage,JSON.stringify(obj))
  }

}