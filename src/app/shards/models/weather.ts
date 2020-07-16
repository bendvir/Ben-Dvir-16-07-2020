export class ForecastInfo {

    WeatherText?: string;
    WeatherIcon?: number;
    Temperature: {
        Metric: {
            Value?: number;
        },

        Imperial: {
            Value?: number;
        }
    }
    constructor(WeatherText: string, Temperature?: number, ImpTemperature?: number, WeatherIcon?: number) {
        this.WeatherText = WeatherText;
        this.WeatherIcon = WeatherIcon;
        this.Temperature = { Metric: { Value: Temperature }, Imperial: { Value: ImpTemperature } };
    }
}

export class City {

    Key: string;
    LocalizedName: string;
    isFavorite: boolean = false;

    constructor(key: string, localizedName: string, isFavorite?: boolean) {
        this.Key = key;
        this.LocalizedName = localizedName;
        this.isFavorite = isFavorite;
    }
}
export class FavoriteCities {

    Cities: {City: City, Condition: ForecastInfo}[] = [];
}

export class TemperatureType {
    
    Celsius: boolean = true;
}