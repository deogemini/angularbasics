import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }
  async  getAllHousingLocations() : Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number) :  Promise<HousingLocation | undefined>
  {
    try{
      const data = await fetch(`${this.url}/${id}`);
      if(!data.ok){
        throw new Error(`Location with ID ${id} not found`);
      }
      return await data.json();
    }catch(error){
      console.error(error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName:string, email:string){
    console.log(firstName, lastName, email);
  }
}