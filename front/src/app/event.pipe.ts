import { Pipe, PipeTransform } from "@angular/core";
import { Events } from "./models/Events";

@Pipe({
    name: "eventCategory"
  })
  export class EventCategoryPipe implements PipeTransform {
    transform(events: Events[], category: string): Events[] {
      if (!events || !category) {
        return events;
      }
      return events.filter(event => event.category === category);
    }
  }