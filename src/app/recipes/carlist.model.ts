import { CarVarianceInfo } from '../shared/ingredient.model';
export class CarList {
  public id: string;
  public carname: string;
  public brand: string;
  public description: string;
  public carVarianceInfo: CarVarianceInfo[];

  constructor(
    id: string,
    carname: string,
    brand: string,
    desc: string,
    carVarianceInfo: CarVarianceInfo[]
  ) {
    this.id = id;
    this.carname = carname;
    this.brand = brand;
    this.description = desc;
    this.carVarianceInfo = carVarianceInfo;
  }
}

export class List {
  public List: CarList[];
}
