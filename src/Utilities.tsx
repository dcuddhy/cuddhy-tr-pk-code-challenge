export interface ChartProps {
 data?: DataProps[];
 channel: string;
}
export interface DataProps {
  eventType: string;
  millisecondOffset: number;
  values: ValuesProps[];
}

export interface InitialDataProps {
  channelSet: string[];
  isEventBased: boolean;
  samples: DataProps[];
}

interface ValuesProps {
  [key: string]: number;
}
