export function setPageTitle(pathname: string): string {
  switch (pathname) {
    case "/faq":
      return "FAQ";

    case "/tuff-token":
      return "Tuff Token";

    case "/tap-token":
      return "Tap Token";

    case "/moai-token":
      return "Moai Token";

    case "/quarry-coin":
      return "Quarry Coin";
  }
}
