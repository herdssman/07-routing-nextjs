export const tags = ["Work", "Personal", "Meeting", "Shopping", "Todo"] as const;

export type Tag = typeof tags[number];