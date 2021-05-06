import { CarVarianceInfo } from '../shared/ingredient.model';
export class CarList {
  public id: string;
  public carname: string;
  public brand: string;
  public description: string;
  public image: string;
  public carVarianceInfo: CarVarianceInfo[];

  constructor(
    id: string,
    carname: string,
    brand: string,
    desc: string,
    image: string,
    carVarianceInfo: CarVarianceInfo[]
  ) {
    this.id = id;
    this.carname = carname;
    this.brand = brand;
    this.description = desc;
    this.image = image;
    this.carVarianceInfo = carVarianceInfo;
  }
}

export class List {
  public List: CarList[];
}
