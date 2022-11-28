export class Sleep {
  public starttime: string;
  public endtime: string;
  public duration: string;

  constructor(starttime: string, endtime: string, dur: string) {
    this.starttime = starttime;
    this.endtime = endtime;
    this.duration = dur;
  }
}
