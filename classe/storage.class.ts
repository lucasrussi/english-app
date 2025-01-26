
interface storagedInterface {
  questionId:number,
  responseId:number,
  status:boolean
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
    let storagedData = this.getResponseStorage();
    storagedData = this.updateOrInsertArray(obj,storagedData)
    localStorage.setItem(this.keyResponseStorage,JSON.stringify(storagedData));
  }

  getQuestionAlreadyResponded(questionId:number):boolean{
    const questionResponded = this.getResponseStorage();
    const index = questionResponded.findIndex((item)=> item.questionId === questionId)
    if(index !== -1) {
      return true;
    }else{
      return false;
    }
  }

  getQuestionRespondedById(questionId:number):storagedInterface | null {
    const questionResponded = this.getResponseStorage();
    const findedQuestion = questionResponded.find((item)=> item.questionId === questionId);
    if(findedQuestion === undefined) {
      return null
    }else{
      return findedQuestion
    }
  }

  private updateOrInsertArray(obj:storagedInterface,storagedData:storagedInterface[]):storagedInterface[]{

    const index = storagedData.findIndex((item) => item.questionId === obj.questionId);
    if (index !== -1) {
      storagedData[index] = { ...storagedData[index], ...obj };
    } else {
      storagedData.push(obj);
    }
    return storagedData;
  }

}