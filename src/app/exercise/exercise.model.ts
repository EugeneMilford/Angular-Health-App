export class Exercise {
  public name: string;
  public description: string;
  public starttime: string;
  public endtime: string
  public duration: string;

  constructor(name: string, desc: string, starttime: string, endtime: string, dur: string) {
    this.name = name;
    this.description = desc;
    this.starttime = starttime;
    this.endtime = endtime;
    this.duration = dur;
  }
}
