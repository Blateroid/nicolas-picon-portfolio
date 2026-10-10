export type Discovery = {
  stat?: string; statLabel?: string; who: string; method?: string;
  extraStats?: { stat: string; label: string }[];
  heardLabel?: string; changedLabel?: string;
  persona?: { name: string; quote: string; traits: string[]; note: string };
  quotes?: { text: string; source: string }[];
  findings: { heard: string; changed: string }[];
  outcome?: string;
};
