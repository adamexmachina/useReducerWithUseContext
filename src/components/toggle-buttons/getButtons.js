import { VIEWTYPE } from "../../types/view-types";

export default function getButtons() {
  return [
    {
      name: `Random ${VIEWTYPE.NAME1}`,
      value: VIEWTYPE.VIEW1
    },
    {
      name: `Random ${VIEWTYPE.NAME2}`,
      value: VIEWTYPE.VIEW2
    }
  ];
}
