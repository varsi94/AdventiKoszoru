import moment from "moment";

export class AdventCalculator {
	calculated: ((count: number) => void) | null = null;

	constructor(protected now: () => moment.Moment) {

	}

	init() {
		const now = this.now();
		const adventSundays = this.getAdventSundays(now.year());
		const count = adventSundays.filter(a => now.diff(a) > 0).length;
		if (this.calculated) {
			this.calculated!(count);
		}
	}

	getAdventSundays(year: number): moment.Moment[] {
		const christmas = moment(`${year}-12-24`);
		const first: moment.Moment = christmas.add(-christmas.weekday(), "days");
		return [-3, -2, -1, 0].map(m => {
			const clone = first.clone();
			return clone.add(7 * m, "days");
		});
	}
}