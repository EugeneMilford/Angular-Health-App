export class Food {
  public name: string;
  public description: string;
  public time: string;
  public imagePath: string;

  constructor(name: string, desc: string, time: string, img: string ) {
    this.name = name;
    this.description = desc;
    this.time = time;
    this.imagePath = img;
  }
}


