import { Sleep } from "./sleep.model";

export class SleepService {
  private sleep: Sleep[] = [
    new Sleep('21:00', '06:00', '9 hrs'),
    new Sleep('16:00', '18:00', '2 hrs')
  ];

  getSleep() {
    return this.sleep.slice();
  }
}
