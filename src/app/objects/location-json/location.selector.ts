import { OnInit, Injectable } from '@angular/core';
import stateRaw from './json/states.json';
import countryRaw from './json/countries.json';

export interface Country {
    id: string;
    name: string;
}

export interface State {
    id: string;
    name: string;
}

export interface IJsonCountries {
    Countries: (Country)[];
}
export interface IJsonStates {
    States: (State)[];
}

@Injectable()
export class LocationSelector implements OnInit {
    constructor() {}

    ngOnInit() {
    }

    public getStates() {
        return stateRaw as IJsonStates;
    }

    public getCountries() {
        return countryRaw as IJsonCountries;
    }

    public getAllLocations(): any[] {
        const options: Array<{id: string, name: string}> = [];

        this.getCountries().Countries.forEach(e => {
            const name = e.name;
            const id = e.id;
            options.push({id, name});
        });

        this.getStates().States.forEach(e => {
            const name = e.name;
            const id = e.id;
            options.push({id, name});
        });

        return options.sort(this.compare);
    }

    public compare(a, b) {
        let comparison = 0;
        if (a.name > b.name) {
          comparison = 1;
        } else if (a.name < b.name) {
          comparison = -1;
        }
        return comparison;
      }
}
