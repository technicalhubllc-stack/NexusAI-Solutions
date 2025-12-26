
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GroundingSource {
  web?: {
    uri: string;
    title: string;
  };
}

export interface AIResponse {
  text: string;
  sources: GroundingSource[];
}

export interface DashboardData {
  name: string;
  efficiency: number;
  automation: number;
  savings: number;
}
