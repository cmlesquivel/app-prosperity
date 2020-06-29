saludo = () => {
  this.props.navigation.navigate("Worked", {
    creditMotorcicle: 3450000,
    selecCreditMotorcicle: true,
  });
};

calcularRentabilidad = () => {
  let day_as_milliseconds = 86400000;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  for (let i = 0; i < this.state.investor.length; i++) {
    for (let j = 0; j < this.state.investor[i]["removeMoney"].length; j++) {
      let dateStart = new Date(
        this.state.investor[i]["removeMoney"][j]["dateStart"]
      );

      let dateEnd = new Date(
        this.state.investor[i]["removeMoney"][j]["dateEnd"]
      );

      let diff_in_millisenconds = dateEnd - dateStart;
      let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
      let periodos = Math.trunc(
        diff_in_days / this.state.investor[i]["removeMoney"][j]["numberDays"]
      );

      this.state.investor[i]["removeMoney"][j]["balance"] =
        this.state.investor[i]["removeMoney"][j]["amount"] *
        Math.pow(
          this.state.investor[i]["removeMoney"][j]["profitability"],
          periodos
        );

      this.state.investor[i]["removeMoney"][j][
        "amountPesos"
      ] = formatterPeso.format(
        this.state.investor[i]["removeMoney"][j]["amount"]
      );

      this.state.investor[i]["removeMoney"][j][
        "balancePesos"
      ] = formatterPeso.format(
        this.state.investor[i]["removeMoney"][j]["balance"]
      );
    }
  }
};

//investor

calcularRentabilidad = () => {
  let miFechaActual = new Date();
  let day_as_milliseconds = 86400000;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  for (let i = 0; i < this.state.investor.length; i++) {
    this.state.investor[i]["balanceTotal"] = 0;
    for (let j = 0; j < this.state.investor[i]["investments"].length; j++) {
      let miFechaPasada = new Date(
        this.state.investor[i]["investments"][j]["date"]
      );

      let diff_in_millisenconds = miFechaActual - miFechaPasada;
      let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
      let periodos = Math.trunc(
        diff_in_days / this.state.investor[i]["investments"][j]["numberDays"]
      );

      this.state.investor[i]["investments"][j]["balance"] =
        this.state.investor[i]["investments"][j]["amount"] *
        Math.pow(
          this.state.investor[i]["investments"][j]["profitability"],
          periodos
        );

      this.state.investor[i]["balanceTotal"] += this.state.investor[i][
        "investments"
      ][j]["balance"];

      this.state.investor[i]["investments"][j][
        "balancePesos"
      ] = formatterPeso.format(
        this.state.investor[i]["investments"][j]["balance"]
      );
    }
    this.state.investor[i]["balanceTotalPesos"] = formatterPeso.format(
      this.state.investor[i]["balanceTotal"]
    );
  }
};

//myinvestment
calcularRentabilidad = () => {
  let miFechaActual = new Date();
  let day_as_milliseconds = 86400000;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  for (let i = 0; i < this.state.investor.length; i++) {
    this.state.investor[i]["balanceTotal"] = 0;
    for (let j = 0; j < this.state.investor[i]["investments"].length; j++) {
      let miFechaPasada = new Date(
        this.state.investor[i]["investments"][j]["date"]
      );

      let diff_in_millisenconds = miFechaActual - miFechaPasada;
      let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
      let periodos = Math.trunc(
        diff_in_days / this.state.investor[i]["investments"][j]["numberDays"]
      );

      this.state.investor[i]["investments"][j]["balance"] =
        this.state.investor[i]["investments"][j]["amount"] *
        Math.pow(
          this.state.investor[i]["investments"][j]["profitability"],
          periodos
        );

      this.state.investor[i]["balanceTotal"] += this.state.investor[i][
        "investments"
      ][j]["balance"];

      // amountPesos

      this.state.investor[i]["investments"][j][
        "amountPesos"
      ] = formatterPeso.format(
        this.state.investor[i]["investments"][j]["amount"]
      );

      this.state.investor[i]["investments"][j][
        "balancePesos"
      ] = formatterPeso.format(
        this.state.investor[i]["investments"][j]["balance"]
      );
    }
    this.state.investor[i]["balanceTotalPesos"] = formatterPeso.format(
      this.state.investor[i]["balanceTotal"]
    );
  }
};


action={() => {
  this.props.createNewUser(
    this.state.name,
    this.state.document,
    this.state.phone,
    this.state.email,
    this.state.password
  );
  this.props.navigation.navigate("SelectProfile");
}}