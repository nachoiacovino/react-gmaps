class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    return this.services.reduce((acc, service) => {
      const multimediaContent = service.getMultimediaContent();
      if (typeof multimediaContent === PremiumContent) {
        acc += multimediaContent.additionalFee;
      }

      if (typeof service === StreamingService) {
        acc += multimediaContent.streamingPrice;
      } else {
        acc += multimediaContent.downloadPrice;
      }

      return acc;
    }, 0);
  }
}
