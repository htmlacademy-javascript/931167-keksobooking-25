import { capacitiesCount } from "./form";

export function getRoomsErrorMessage() {
  if (capacitiesCount.value === '0') {
    return `${''}`;
  }
  return `${'Не поместитесь'}`;
}
