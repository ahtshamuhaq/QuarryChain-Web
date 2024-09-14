import media from 'styled-media-query'

export function SetStylesPerQuarter(quarter: number): string {

  if (media.between("large", "huge")) {
    switch (quarter) {
      case 1:
        return "padding: 20px 20px 55px 20px; border-top: none;"

      case 2:
        return "padding: 55px 20px; border-left: none; border-bottom: none; border-right: none;"

      case 3:
        return "padding: 0px 20px 55px 20px; border-top: none;"

      default:
        return "padding: 55px 20px; border-left: none; border-right: none; border-bottom: none;"
    }
  }

  switch (quarter) {
    case 1:
      return "padding: 40px 40px 75px 40px; border-top: none;"

    case 2:
      return "padding: 75px 40px; border-left: none; border-bottom: none; border-right: none;"

    case 3:
      return "padding: 0px 40px 75px 40px; border-top: none;"

    default:
      return "padding: 75px 40px; border-left: none; border-right: none; border-bottom: none;"
  }
}

export function setHexagonPositionPerQuarter(quarter: number): string {
  if (!quarter) return;

  if (quarter === 2 || quarter === 4) {
    return 'top: -33px;';
  }
  return 'bottom: -30px;';
}
