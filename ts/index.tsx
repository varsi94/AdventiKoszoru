import { AdventCalculator } from "./advent.calculator";
import ReactDOM from "react-dom";
import React from "react";
import { AdventWreath } from './advent.wrath';
import moment from 'moment';

class App {
	private adventCalculator = new AdventCalculator(() => moment());

	start() {
		ReactDOM.render(<AdventWreath adventCalculator={this.adventCalculator} />, document.getElementById("app"));
		this.adventCalculator.init();
	}
}

export const app = new App();