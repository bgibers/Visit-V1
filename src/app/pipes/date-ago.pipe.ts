import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateAgo",
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const now = new Date().toUTCString();
      const seconds = Math.abs(
        (new Date(now).getTime() - new Date(value + "Z").getTime()) / 1000
      ); // appending Z lets the date know its UTC

      if (seconds < 29) {
        // less than 30 seconds ago will show as 'Just now'
        return "Just now";
      }
      const intervals = {
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
      };
      let counter;
      // tslint:disable-next-line: forin
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);

        if (Math.floor(seconds / 86400) > 1) {
          const date = new Date(value);
          const month = date.toLocaleString("default", { month: "long" });
          return `${month} ${date.getDate()}`;
        }

        if (counter > 0) {
          if (counter === 1) {
            return counter + " " + i + " ago"; // singular (1 hour ago)
          } else {
            return counter + " " + i + "s ago"; // plural (2 hours ago)
          }
        }
      }
    }
    return value;
  }
}
