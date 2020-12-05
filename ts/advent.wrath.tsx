import React from 'react';
import { AdventCalculator } from './advent.calculator';

const Candle: React.FC<{ enabled: boolean }> = ({ enabled }) => {
	if (!enabled) {
		return (
			<>
				<g transform="translate(318.16 647.58)">
					<path
						fill="#2b1100"
						d="M2342.8 21.944c42.915 14.026 74.188 11.043 104.47 0v222.63c2.838 29.284-105.62 27.734-105.97 0z"
					></path>
					<path
						fill="url(#linearGradient3578)"
						d="M2343.1 22.046c42.141 12.036 74.47 8.825 104.21.614v224.37c3.093 24.855-105.48 24.695-106.5 0z"
					></path>
					<path
						fill="url(#linearGradient3580)"
						d="M2345.3 22.046c41.225 12.036 72.851 8.825 101.95.614v224.37c3.026 24.855-103.18 24.695-104.18 0z"
					></path>
					<path
						fill="url(#linearGradient3582)"
						d="M124.45 398.92c2.604 12.811 17.11 18.252 27.906 22.812 54.236 19.08 113.25 18.567 169.93 13.16 24.444-3.249 49.728-8.215 70.445-22.379 6.226-5.237 6.803-13.555 5.746-21-.27-194.57-.087-389.15-.121-583.72-87.388 22.356-180.65 21.725-267.72-1.688l-6.187 592.81z"
						filter="url(#filter16207)"
						transform="translate(2295.6 99.172) scale(.37041)"
					></path>
					<path
						fill="url(#linearGradient3584)"
						d="M2344 23.668l-2.292 223.13c.965 4.822 6.338 6.87 10.337 8.586.204.073.409.14.614.212 3.961-3.964 7.726-8.46 11.946-12.033 9.822-8.317 0-13.3 0-24.112s8.19-12.475 15.557-19.96c7.366-7.485-2.456-10.815-5.73-20.796-3.274-9.98-1.637-15.797 5.73-21.619s2.448-16.638-1.644-44.085c-4.093-27.446 9.005-22.453 22.919-68.197 1.632-5.365 2.431-10.199 2.57-14.562-20.182.956-40.515-1.237-60.007-6.563z"
					></path>
					<path
						fill="url(#linearGradient3586)"
						d="M3411.8 2092.9c2.604 12.811 17.11 18.252 27.906 22.812 54.236 19.08 113.25 18.567 169.93 13.16 24.444-3.249 49.728-8.216 70.445-22.379 6.226-5.237 6.803-13.555 5.746-21-.27-194.57-.087-389.15-.121-583.72-87.388 22.356-180.65 21.725-267.72-1.688l-6.187 592.81z"
						filter="url(#filter16207)"
						opacity="0.407"
						transform="matrix(.37041 0 0 .38049 1077.9 -549.75)"
					></path>
				</g>
				<g transform="translate(738.69 578.49)">
					<path
						fill="#e15f29"
						d="M2026.8 91.607a52.18 9.822 0 01-104.36 0 52.18 9.822 0 11104.36 0z"
					></path>
					<path
						fill="url(#radialGradient3588)"
						d="M2026.8 89.356a52.18 7.571 0 01-104.36 0 52.18 7.571 0 11104.36 0z"
					></path>
					<path
						fill="#faf3b8"
						d="M1974.1 92.078c-.376-.772-2.082.078-2.394-.723-.097-.374 2.587-1.718 2.394-3.328.084-.173 0-.386 0-.58 0-.192.133-.441 0-.578-.133-.136-.43.137-.563 0-.018-.018 0-1.596 0-1.736v-1.158c0-.193-.188-.578 0-.578.187 0 0 .771 0 .578V82.24c0-.193-.133-.442 0-.579.132-.136.43.137.563 0 .133-.136 0-.386 0-.579.188 0 .395.087.563 0a1.31 1.31 0 00.564-.578c.084-.173-.188-.58 0-.58.187 0 .187.58 0 .58-.697 0-.564-.812-.564-1.158V77.61c0-.193-.188-.579 0-.579s0 .772 0 .579c0-.386-.168-.813 0-1.158.014-.03 1.64-.052 1.69 0 .133.137-.084.407 0 .58.119.243.445.334.563.578.33.679-.334.687-.563 1.157-.084.173 0 .386 0 .58v.578c0 .193.188.579 0 .579s0-.772 0-.579v1.158c0 .385.168.812 0 1.157-.084.173-.43-.136-.563 0-.133.136.133.442 0 .579-.133.136-.43-.137-.563 0-.133.136 0 .386 0 .579v.578c0 .193.187.58 0 .58-.188 0 0-.773 0-.58 0 .386-.12.792 0 1.158.483 1.49 1.126-.516 1.126 1.157 0 .386.376 1.158 0 1.158-.375 0 0-1.544 0-1.158 0 .772.01 1.544 0 2.315-.024 1.905-.35 2.223-2.253 3.473z"
					></path>
					<path
						fill="url(#linearGradient3590)"
						d="M2024.1 89.908a50.842 8.123 0 01-101.68 0 50.842 8.123 0 11101.68 0z"
					></path>
				</g>
			</>
		);
	} else {
		return (
			<g transform="translate(182.5 0)">
				<path
					fill="url(#radialGradient3628)"
					d="M2412.3 587.4c4.698 0 6.384.68 10.326-1.29.544-.273.7-1.144 1.29-1.292 1.253-.313 2.582 0 3.873 0 .43 0 .906.193 1.29 0 .545-.272.714-1.098 1.292-1.29.816-.273 1.746.208 2.581 0 1.932-.483 5.066-3.179 6.454-3.873.385-.192.86 0 1.29 0 1.343 0 6.73.254 7.746 0 5.4 2.338 1.493-2.037 2.581-2.581.304-.152 4.315 0 5.163 0H2471.676c.43 0 .986.304 1.29 0 .68-.68.61-1.901 1.291-2.582.304-.304.86 0 1.291 0h145.858c.832 0 8.163-.218 9.036 0 .934.233 1.649 1.058 2.582 1.29 1.139.286 4.057-.368 5.163 0 .913.305 1.638 1.103 2.582 1.292 1.265.253 2.581 0 3.872 0 .43 0 .986-.305 1.29 0 .681.68.49 2.048 1.291 2.581.716.478 1.722 0 2.582 0 1.5 0 5.284-.292 6.454 0 .933.234 1.781.757 2.582 1.291.547.365 3.605 3.338 3.872 3.872.192.385-.193.906 0 1.291.59 1.182 2.929 2.267 3.872 2.582.408.136.987-.304 1.29 0 .183.182.133 3.607 0 3.872-.89 1.782-6.395 2.697-5.162 5.163.637 1.274 5.18 3.448 6.454 3.873.408.136.882-.136 1.29 0a10.92 10.92 0 012.582 1.29c.506.338.714 1.099 1.29 1.291.817.272 1.813-.385 2.582 0 1.089.544 1.494 2.037 2.582 2.582.77.385 1.747-.209 2.582 0 6.233 1.558-.064.613 3.872 2.581.385.193.986-.304 1.29 0 .305.305-.304.987 0 1.291.68.68 1.902.61 2.582 1.291.304.304 0 .86 0 1.29v9.036c0 .582.197 3.48 0 3.873-.272.544-.86.86-1.29 1.29-.43.43-.747 1.02-1.291 1.291-.385.193-.987-.304-1.291 0-.609.609.385 1.812 0 2.582-3.048 6.095.679-7.879-2.582 5.163-.104.417 0 .86 0 1.29v7.745c0 .72-.197 5.863 0 6.454.193.578.86.86 1.291 1.291l1.29 1.29 6.455 6.455c1.29 1.29 3.056 2.24 3.872 3.872.385.77-.443 1.844 0 2.582.94 1.565 2.777 2.412 3.872 3.872.259.344-.304.987 0 1.29.68.681 1.902.611 2.582 1.292.304.304-.192.906 0 1.29.544 1.089 2.037 1.494 2.582 2.582.192.385-.193.906 0 1.29.272.545 1.098.714 1.29 1.292.28.838 0 7.863 0 9.035 0 1.45.308 8.113 0 9.036-.304.912-.933 1.688-1.29 2.581-.506 1.264-.536 2.74-1.291 3.873-.239.358-.987-.305-1.291 0-.68.68-.757 1.78-1.29 2.581-3.445 5.166.862-2.584-2.582 2.582-.534.8-.757 1.78-1.291 2.581-.338.507-.86.86-1.29 1.291-.431.43-.747 1.019-1.292 1.291-.384.192-.906-.192-1.29 0-.545.272-.861.86-1.291 1.29l-1.291 1.292c-1.815 1.815-2.244 2.412-5.163 3.872-.385.192-.987-.304-1.29 0-.305.304.303.986 0 1.29-.305.305-.987-.304-1.292 0-.304.305.305.987 0 1.291-2.67 2.671.105-4.08-2.581 1.291-.193.385.304.987 0 1.291-.304.304-.987-.304-1.291 0-.304.304.304.987 0 1.29-.304.305-.987-.303-1.29 0-.681.681-.611 1.902-1.292 2.582s-2.047.49-2.581 1.291c-.477.716.385 1.812 0 2.582-1.291 2.581-2.582 1.936-3.872 3.872-.681 1.022-3.493 6.605-3.873 7.745-.136.408.136.882 0 1.29-.304.913-.986 1.67-1.29 2.582-.273.817 0 1.721 0 2.582v6.454c0 .848.242 3.144 0 3.872a10.922 10.922 0 01-1.291 2.582c-.338.506-1.099.713-1.291 1.29-.272.817.477 1.866 0 2.582-.534.8-1.902.61-2.582 1.29-7.944 11.917.391 1.742-3.872 3.873-5.372 2.686 1.38-.089-1.29 2.582-.681.68-1.902.61-2.582 1.29-.68.681-.61 1.902-1.291 2.582s-1.721.86-2.582 1.291c-.86.43-1.78.757-2.581 1.29-.507.338-.747 1.02-1.291 1.292-1.217.608-2.656.682-3.873 1.29-13.298 6.65 6.53-2.11-7.744 6.454-.738.443-1.812-.384-2.582 0-1.088.545-1.569 1.907-2.581 2.582-.358.239-.987-.304-1.291 0-.68.68-.61 1.901-1.29 2.582-.305.304-.987-.305-1.292 0-.68.68-.757 1.78-1.29 2.581-.338.506-1.019.747-1.291 1.291-.256.512.264 3.608 0 3.872-.68.68-2.048.49-2.582 1.291-.477.716 0 1.721 0 2.582 0 1.29.355 2.63 0 3.872 2.584 4.69-2.94 4.124-3.872 6.454-.659 1.647-.498 3.576-1.29 5.163-.193.385-1.053-.358-1.292 0-.754 1.132-.682 2.655-1.29 3.872-.273.545-.954.785-1.291 1.291-.534.8-.61 1.901-1.291 2.582-.304.304-.987-.305-1.29 0-.681.68-.611 1.901-1.292 2.581-.304.305-.986-.304-1.29 0s.304.987 0 1.291c-.68.68-1.812.714-2.582 1.29-.973.731-1.569 1.907-2.581 2.582-.358.24-.906-.192-1.291 0-.544.273-.747 1.02-1.291 1.291-.77.385-1.747-.208-2.582 0-3.493-2.194-3.337 1.973-5.163 2.582-.816.272-1.737-.169-2.581 0-13.427 2.685 5.682-.104-7.745 2.581-2.88.576-6.19-.711-9.035 0-2.248.562-4.226 1.945-6.454 2.582-.828.237-1.747-.209-2.582 0-.933.233-1.648 1.057-2.581 1.29-.857.215-6.65 0-7.745 0H2510.4c-.86 0-1.738.17-2.582 0-2.592.297-4.206-2.019-6.454-2.58-.835-.21-1.812.384-2.581 0-.385-.193.385-1.1 0-1.292-2.582-1.29-1.936.646-3.873 0-.737-.245-7.335-3.462-7.744-3.872-1.097-1.097-1.485-2.775-2.582-3.872-.304-.304-.906.192-1.29 0-.545-.272-.785-.953-1.291-1.29-.24-.161-5.08-2.5-5.164-2.583-.68-.68-.61-1.9-1.29-2.581-3.135-3.135-1.896.384-3.873-2.582-.533-.8-.61-1.901-1.29-2.581-.305-.305-.987.304-1.291 0-.305-.305.136-.883 0-1.291-.305-.913-.61-1.901-1.291-2.582-.304-.304-.987.305-1.29 0-.681-.68-.714-1.812-1.292-2.581-1.348-1.799-3.534-3.535-5.163-5.163-1.405-1.405-3.72-4.201-5.163-5.164-.358-.238-.906.193-1.29 0-1.388-.693-2.485-1.887-3.873-2.581-.703-.352-7.293.301-7.745 0-1.012-.675-1.569-1.907-2.581-2.582-.346-.23-6.235.088-6.454 0-1.13-.452-1.493-2.037-2.582-2.581-.844-.423-5.383.267-6.454 0-6.233-1.559.064-.614-3.872-2.582-.385-.192-.986.304-1.29 0-.305-.304.304-.986 0-1.29-.68-.681-1.902-.611-2.582-1.292-.68-.68-.61-1.9-1.291-2.581s-1.901-.61-2.582-1.29c-.68-.681-.757-1.782-1.29-2.583-.675-1.012-1.907-1.569-2.582-2.581-.534-.8-.61-1.901-1.29-2.582-.305-.304-1.099.385-1.291 0-.385-.77.272-1.765 0-2.581-.193-.578-1.02-.747-1.291-1.291-.609-1.217-.683-2.656-1.291-3.872-.272-.545-1.019-.747-1.29-1.291-.288-.575.196-4.573 0-5.163-.193-.578-.861-.86-1.292-1.291 0-1.29.313-2.62 0-3.872-.147-.59-1.018-.747-1.29-1.291-.193-.385.136-.883 0-1.291-.305-.913-.934-1.688-1.291-2.582-.505-1.263-1.024-2.538-1.29-3.872-.17-.844.384-1.812 0-2.582-.545-1.088-2.13-1.451-2.583-2.581-.479-1.199.409-2.648 0-3.872-2.029-6.088-1.833-2.106-3.872-5.164-5.224-7.836 3.716 4.042-2.581-6.453-.627-1.044-1.907-1.57-2.582-2.582-.239-.358.16-.891 0-1.29-2.215-5.54-2.369-4.38-5.163-9.036-4.114-6.856 2.382 3.272-1.29-7.745-.386-1.155-1.907-1.569-2.582-2.582-.24-.358 0-.86 0-1.29-.86-1.291-1.485-2.776-2.582-3.873-1.097-1.097-2.775-1.484-3.872-2.581-.68-.68-.757-1.781-1.291-2.582-1.29-1.935-4.131-3.099-5.163-5.163-.385-.77.272-1.765 0-2.582-.292-.874-3.38-2.886-3.873-3.872-.192-.385 0-.86 0-1.29 0-.861.21-1.747 0-2.582-.233-.934-1.057-1.649-1.29-2.582-.254-1.015 0-6.402 0-7.745v-11.617c0-.86-.272-1.765 0-2.581.304-.913.986-1.669 1.29-2.582.136-.408-.192-.906 0-1.29.273-.545.926-.805 1.291-1.291.931-1.242 1.485-2.776 2.582-3.873.304-.304.986.305 1.29 0 .305-.304-.192-.906 0-1.29.594-1.187 4.837-4.184 5.164-5.164.272-.816-.385-1.812 0-2.581.192-.385.986.304 1.29 0 .68-.68.611-1.902 1.291-2.582.609-.608 1.812.385 2.582 0 5.372-2.686-1.38.09 1.29-2.581.68-.68 1.902-.61 2.582-1.291.304-.304-.304-.987 0-1.291.304-.304.906.192 1.291 0 .544-.272.86-.86 1.29-1.29.431-.431.954-.785 1.291-1.292.534-.8.758-1.78 1.291-2.581.338-.506 1.019-.747 1.291-1.291.192-.385-.304-.987 0-1.29.304-.305.987.303 1.29 0 .305-.305-.192-.907 0-1.292.273-.544 1.02-.746 1.292-1.29.384-.77-.385-1.812 0-2.582.272-.544 1.018-.747 1.29-1.29.193-.386 0-.861 0-1.292 0-.86-.272-1.765 0-2.581.193-.577 1.02-.747 1.291-1.291.193-.385-.104-.873 0-1.29.33-1.32.961-2.553 1.291-3.873.209-.835-.385-1.812 0-2.582.272-.544 1.019-.746 1.29-1.29.193-.385-.192-.906 0-1.291.545-1.089 2.038-1.493 2.582-2.582.193-.385-.304-.986 0-1.29.305-.305.987.304 1.291 0 .609-.61-.608-1.974 0-2.582.304-.305.906.192 1.29 0 3.484-1.742-.044-.579 1.292-2.582.675-1.013 1.608-1.851 2.581-2.582.77-.577 1.781-.757 2.582-1.29 2.557.129.61-1.902 1.29-2.582 1.949-1.948 4.303-3.442 6.454-5.163z"
					opacity="0.757"
				></path>
				<g transform="translate(-70.59 648.55)">
					<path
						fill="#2b1100"
						d="M2548.5 70.39c42.915 11.221 74.188 8.834 104.47 0V248.5c2.838 23.427-105.62 22.187-105.97 0z"
					></path>
					<path
						fill="url(#linearGradient3630)"
						d="M2548.8 70.472c42.141 9.629 74.47 7.06 104.21.491v179.5c3.093 19.884-105.48 19.756-106.5 0z"
					></path>
					<path
						fill="url(#linearGradient3632)"
						d="M2551.1 70.472c41.225 9.629 72.851 7.06 101.95.491v179.5c3.026 19.884-103.18 19.756-104.18 0z"
					></path>
					<path
						fill="url(#linearGradient3582)"
						d="M124.45 398.92c2.604 12.811 17.11 18.252 27.906 22.812 54.236 19.08 113.25 18.567 169.93 13.16 24.444-3.249 49.728-8.215 70.445-22.379 6.226-5.237 6.803-13.555 5.746-21-.27-194.57-.087-389.15-.121-583.72-87.388 22.356-180.65 21.725-267.72-1.688l-6.187 592.81z"
						filter="url(#filter16207-1)"
						transform="matrix(.37041 0 0 .29633 2501.3 132.17)"
					></path>
					<path
						fill="url(#linearGradient3636)"
						d="M2549.7 71.769l-2.292 178.5c.965 3.857 6.338 5.496 10.337 6.87.204.057.409.111.614.168 3.961-3.17 7.726-6.768 11.946-9.626 9.822-6.653 0-10.64 0-19.29 0-8.65 8.19-9.98 15.557-15.968 7.366-5.988-2.456-8.652-5.73-16.636-3.274-7.984-1.637-12.638 5.73-17.295 7.366-4.657 2.448-13.31-1.644-35.268-4.093-21.957 9.005-17.962 22.919-54.558 1.632-4.292 2.431-8.159 2.57-11.649-20.182.765-40.515-.99-60.007-5.25z"
					></path>
					<path
						fill="url(#linearGradient3586)"
						d="M3411.8 2092.9c2.604 12.811 17.11 18.252 27.906 22.812 54.236 19.08 113.25 18.567 169.93 13.16 24.444-3.249 49.728-8.216 70.445-22.379 6.226-5.237 6.803-13.555 5.746-21-.27-194.57-.087-389.15-.121-583.72-87.388 22.356-180.65 21.725-267.72-1.688l-6.187 592.81z"
						filter="url(#filter16207-1)"
						opacity="0.407"
						transform="matrix(.37041 0 0 .30439 1283.6 -386.96)"
					></path>
				</g>
				<g transform="translate(813.18 627.25)">
					<path
						fill="#000"
						d="M2827.5 1502.9c-11.048 2.762-25.412 1.657-25.412-19.335s11.455-44.245 13.838-66.67c4.266-40.138 3.84-64.255 3.84-64.255s-.877 94.276 3.314 100.54c1.456 11.344 12.706 23.754 12.706 28.726 1.307 9.619-2.596 19.333-8.287 20.992z"
						filter="url(#filter16119-0)"
						opacity="0.996"
						transform="matrix(.81851 0 0 .78614 -591.74 -1096.1)"
					></path>
					<path
						fill="#e15f29"
						d="M1769.3 91.944a52.18 9.822 0 01-104.36 0 52.18 9.822 0 11104.36 0z"
					></path>
					<g transform="translate(-489.11 -1084.8) scale(.78117)">
						<path
							fill="#fdffde"
							d="M2830.6 1498.2c-11.048 2.762-25.412 1.657-25.412-19.335s11.455-44.245 13.838-66.67c4.266-40.138 3.84-64.255 3.84-64.255s-.877 94.276 3.314 100.54c1.456 11.344 12.706 23.754 12.706 28.726 1.307 9.619-2.596 19.333-8.287 20.992z"
						></path>
						<path
							fill="url(#linearGradient3604)"
							d="M2821.7 1396.6c-1.047 15.727-3.575 31.392-8.402 46.416-3.789 13.454-8.071 27.454-6.567 41.49.906 6.303 5.212 12.665 12.017 13.274 4.807.74 10.377.586 14.353-2.581 4.925-5.291 6.004-13.562 3.903-20.372-2.839-6.636-7.67-12.301-10.031-19.156-4.967-13.518-4.047-28.186-4.79-42.335a845.31 845.31 0 01-.327-18.766l-.156 2.031z"
						></path>
						<path
							fill="url(#linearGradient3606)"
							d="M2821.7 1396.6c-1.047 15.727-3.575 31.392-8.402 46.416-3.789 13.454-8.071 27.454-6.567 41.49.906 6.303 5.212 12.665 12.017 13.274 4.807.74 10.377.586 14.353-2.581 4.925-5.291 6.004-13.562 3.903-20.372-2.839-6.636-7.67-12.301-10.031-19.156-4.967-13.518-4.047-28.186-4.79-42.335a845.31 845.31 0 01-.327-18.766l-.156 2.031z"
						></path>
						<path
							fill="url(#linearGradient3608)"
							d="M2821.6 1396.6c-.69 15.727-2.357 31.392-5.539 46.416-2.497 13.454-5.32 27.454-4.328 41.49.597 6.303 3.435 12.665 7.921 13.274 3.169.74 6.84.586 9.462-2.581 3.246-5.291 3.957-13.562 2.572-20.372-1.871-6.636-5.056-12.301-6.612-19.156-3.274-13.518-2.668-28.186-3.158-42.335-.12-6.254-.186-12.51-.215-18.766l-.103 2.031z"
						></path>
						<path
							fill="url(#radialGradient3610)"
							d="M2834.8 1478.3a11.719 13.477 0 11-23.438 0 11.719 13.477 0 1123.438 0z"
							opacity="0.354"
							transform="matrix(1 0 0 1.3768 -1.172 -554.71)"
						></path>
					</g>
					<path
						fill="url(#radialGradient3612)"
						d="M1769.3 89.693a52.18 7.571 0 01-104.36 0 52.18 7.571 0 11104.36 0z"
					></path>
					<path
						fill="url(#linearGradient3614)"
						d="M1716.6 92.415c-.376-.772-2.082.078-2.394-.723-.097-.374 2.587-1.718 2.394-3.328.084-.173 0-.386 0-.58 0-.192.133-.441 0-.578-.133-.136-.43.137-.563 0-.018-.018 0-1.596 0-1.736v-1.158c0-.193-.188-.578 0-.578.187 0 0 .771 0 .578v-1.736c0-.193-.133-.442 0-.579.132-.136.43.137.563 0 .133-.136 0-.386 0-.579.188 0 .395.087.563 0a1.31 1.31 0 00.564-.578c.084-.173-.188-.58 0-.58.187 0 .187.58 0 .58-.697 0-.564-.812-.564-1.158v-1.736c0-.193-.188-.579 0-.579s0 .772 0 .579c0-.386-.168-.813 0-1.158.014-.03 1.64-.052 1.69 0 .133.137-.084.407 0 .58.119.243.445.334.563.578.33.679-.334.687-.563 1.157-.084.173 0 .386 0 .58v.578c0 .193.188.579 0 .579s0-.772 0-.579v1.158c0 .385.168.812 0 1.157-.084.173-.43-.136-.563 0-.133.136.133.442 0 .579-.133.136-.43-.137-.563 0-.133.136 0 .386 0 .579v.578c0 .193.187.58 0 .58-.188 0 0-.773 0-.58 0 .386-.12.792 0 1.158.483 1.49 1.126-.516 1.126 1.157 0 .386.376 1.158 0 1.158-.375 0 0-1.544 0-1.158 0 .772.01 1.544 0 2.315-.024 1.905-.35 2.223-2.253 3.473z"
					></path>
					<path
						fill="url(#linearGradient3616)"
						d="M1766.6 90.245a50.842 8.123 0 01-101.68 0 50.842 8.123 0 11101.68 0z"
					></path>
					<g transform="translate(329.88 -431.09) scale(.37041)">
						<path
							fill="red"
							d="M2827.5 1502.9c-11.048 2.762-25.412 1.657-25.412-19.335s11.455-44.245 13.838-66.67c4.266-40.138 3.84-64.255 3.84-64.255s-.877 94.276 3.314 100.54c1.456 11.344 12.706 23.754 12.706 28.726 1.307 9.619-2.596 19.333-8.287 20.992z"
							filter="url(#filter16119-4-09)"
							opacity="0.996"
							transform="matrix(2.2097 0 0 2.1223 -2485.6 -1794.8)"
						></path>
						<path
							fill="url(#linearGradient3618)"
							d="M3761 1390.5c-23.3 5.825-53.591 3.495-53.591-40.776s24.157-93.308 29.184-140.6c8.997-84.648 8.097-135.51 8.097-135.51s-1.848 198.82 6.99 212.03c3.071 23.924 26.796 50.096 26.796 60.581 2.757 20.285-5.474 40.771-17.476 44.271z"
						></path>
						<path
							fill="url(#linearGradient3620)"
							d="M3746.2 1413.7c-1.014-2.083-5.621.21-6.463-1.953-.261-1.01 6.984-4.637 6.463-8.984.227-.466 0-1.042 0-1.563s.358-1.194 0-1.563-1.162.369-1.52 0c-.05-.05 0-4.308 0-4.687v-3.125c0-.52-.508-1.563 0-1.563.506 0 0 2.084 0 1.563v-4.688c0-.52-.36-1.194 0-1.562.358-.368 1.162.368 1.52 0s0-1.042 0-1.563c.507 0 1.067.233 1.52 0 .642-.329 1.2-.903 1.521-1.562.227-.466-.506-1.563 0-1.563s.507 1.563 0 1.563c-1.879 0-1.52-2.191-1.52-3.125v-4.688c0-.52-.507-1.562 0-1.562s0 2.083 0 1.563c0-1.042-.454-2.194 0-3.125.039-.08 4.426-.14 4.562 0 .358.368-.227 1.096 0 1.562.32.659 1.2.904 1.52 1.563.892 1.832-.902 1.854-1.52 3.125-.227.465 0 1.041 0 1.562v1.563c0 .52.507 1.562 0 1.562s0-2.083 0-1.563v3.126c0 1.041.453 2.193 0 3.125-.227.465-1.162-.369-1.52 0-.36.368.358 1.194 0 1.562-.36.368-1.163-.368-1.522 0s0 1.042 0 1.563v1.562c0 .52.507 1.563 0 1.563s0-2.084 0-1.563c0 1.042-.32 2.137 0 3.125 1.306 4.024 3.042-1.392 3.042 3.125 0 1.042 1.014 3.125 0 3.125s0-4.167 0-3.125c0 2.083.026 4.167 0 6.25-.064 5.143-.947 6-6.083 9.375z"
						></path>
						<path
							fill="url(#linearGradient3622)"
							d="M3972.4 1258.6c-1.455 33.167-4.97 66.203-11.681 97.888-5.266 28.373-11.22 57.897-9.128 87.499 1.26 13.293 7.245 26.709 16.706 27.993 6.682 1.562 14.426 1.235 19.953-5.443 6.846-11.158 8.346-28.6 5.425-42.963-3.946-13.996-10.663-25.942-13.945-40.4-6.904-28.507-5.626-59.44-6.66-89.281a2700.681 2700.681 0 01-.453-39.576l-.217 4.284z"
							filter="url(#filter16347-5-73)"
							transform="matrix(.90428 0 0 .93779 148.81 1.883)"
						></path>
						<path
							fill="red"
							d="M2834.8 1478.3a11.719 13.477 0 11-23.438 0 11.719 13.477 0 1123.438 0z"
							opacity="0.354"
							transform="matrix(1.2089 0 0 2.9036 332.48 -2939.7)"
						></path>
						<path
							fill="url(#linearGradient3624)"
							d="M3755.8 1382.7c-18.967 5.252-43.624 3.151-43.624-36.762s19.664-84.123 23.756-126.76c7.324-76.315 6.59-122.17 6.59-122.17s-1.503 179.25 5.69 191.16c2.5 21.569 21.813 45.165 21.813 54.618 2.244 18.288-4.456 36.758-14.225 39.913z"
							opacity="0.403"
						></path>
						<path
							fill="url(#linearGradient3626)"
							d="M3752.8 1385.8c-17.696 5.74-40.7 3.444-40.7-40.177s18.347-91.938 22.164-138.54c6.833-83.405 6.15-133.52 6.15-133.52s-1.404 195.9 5.308 208.92c2.332 23.573 20.35 49.36 20.35 59.692 2.094 19.987-4.157 40.172-13.272 43.62z"
							filter="url(#filter16383-3-1)"
						></path>
					</g>
				</g>
			</g>);
	}
}

const Wreath: React.FC<{ count: number, style?: React.CSSProperties }> = ({ count, style }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			viewBox="0 0 937.42 581.1"
			style={style}
		>
			<defs>
				<filter id="filter6855-6-5" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="1.142"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11400"
					x1="1183.9"
					x2="1136.4"
					y1="5808.7"
					y2="5864.7"
					gradientTransform="matrix(.97042 0 0 .94649 32.953 315.93)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6983-4-3" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.408"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11402"
					x1="1275.3"
					x2="1263.2"
					y1="5881.4"
					y2="5931.9"
					gradientTransform="rotate(-45 -9976.765 3948.84) scale(1.7105 1.6579)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0f0"></stop>
					<stop offset="1" stopColor="#0f0" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6865-1-2-7" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.646"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11404"
					x1="1267.1"
					x2="1262.1"
					y1="5879.5"
					y2="5936.6"
					gradientTransform="rotate(-45 -10355.624 4105.866) scale(1.7105)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6865-1-2" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.646"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11410"
					x1="1152.1"
					x2="1183.9"
					y1="5958.7"
					y2="5972.8"
					gradientTransform="matrix(1.6687 0 0 1.7105 -604.67 -10529)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0f0"></stop>
					<stop offset="1" stopColor="#0f0" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6873-6" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.703"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11412"
					x1="1143.6"
					x2="1190.7"
					y1="5945.9"
					y2="5981.6"
					gradientTransform="matrix(1.692 0 0 1.685 -633.14 -10376)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<radialGradient
					id="radialGradient11414"
					cx="1242.2"
					cy="5821.8"
					r="24.749"
					gradientTransform="matrix(.81633 -.12244 .14682 .97885 -627.87 275.24)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient6889-2-1"
				></radialGradient>
				<linearGradient id="linearGradient6889-2-1">
					<stop offset="0" stopColor="red"></stop>
					<stop offset="1" stopColor="red" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient11416"
					x1="1249.6"
					x2="1236.9"
					y1="5740"
					y2="5762.2"
					gradientTransform="translate(2.02 66.67)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient6908-1-7"
				></linearGradient>
				<linearGradient id="linearGradient6908-1-7">
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6855-2" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="1.142"></feGaussianBlur>
				</filter>
				<filter id="filter6983-42" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.408"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11264"
					x1="1152.1"
					x2="1183.9"
					y1="5958.7"
					y2="5972.8"
					gradientTransform="matrix(.57074 -1.5681 1.6073 .58501 -7510.1 -1918.5)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0f0"></stop>
					<stop offset="1" stopColor="#0f0" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6873-1-6" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.703"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11266"
					x1="1143.6"
					x2="1190.7"
					y1="5945.9"
					y2="5981.6"
					gradientTransform="matrix(.57868 -1.5899 1.5834 .57631 -7376 -1839.4)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient11268"
					x1="1152.1"
					x2="1183.9"
					y1="5958.7"
					y2="5972.8"
					gradientTransform="matrix(.57074 -1.5681 1.6073 .58501 -7510.1 -1918.5)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient6807-2"
				></linearGradient>
				<linearGradient id="linearGradient6807-2">
					<stop offset="0" stopColor="#0f0"></stop>
					<stop offset="1" stopColor="#0f0" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6873-1" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.703"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11272"
					x1="1275.3"
					x2="1263.2"
					y1="5881.4"
					y2="5931.9"
					gradientTransform="matrix(1.5502 -.72287 .70064 1.5025 -3290.4 -8340.2)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient6807-2"
				></linearGradient>
				<filter id="filter6865-19" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.646"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11274"
					x1="1267.1"
					x2="1262.1"
					y1="5879.5"
					y2="5936.6"
					gradientTransform="scale(1.71046) rotate(-25 -12372.9 1992.424)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient11288"
					x1="1152.1"
					x2="1183.9"
					y1="5958.7"
					y2="5972.8"
					gradientTransform="matrix(1.2783 1.0726 -1.0995 1.3103 7161.5 -9275.5)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0f0"></stop>
					<stop offset="1" stopColor="#0f0" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6873-5" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.703"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11290"
					x1="1143.6"
					x2="1190.7"
					y1="5945.9"
					y2="5981.6"
					gradientTransform="matrix(1.2961 1.0876 -1.0831 1.2908 7041.3 -9176.6)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient11292"
					x1="1275.3"
					x2="1263.2"
					y1="5881.4"
					y2="5931.9"
					gradientTransform="matrix(1.6845 .29702 -.28788 1.6327 689.37 -10396)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#0f0"></stop>
					<stop offset="1" stopColor="#0f0" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter6855-6-44" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="1.142"></feGaussianBlur>
				</filter>
				<filter id="filter6865-1-5" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.646"></feGaussianBlur>
				</filter>
				<filter id="filter6983-4-7" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.408"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient11296"
					x1="1267.1"
					x2="1262.1"
					y1="5879.5"
					y2="5936.6"
					gradientTransform="matrix(1.6845 .29702 -.29702 1.6845 743.88 -10705)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter16207" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="9.065"></feGaussianBlur>
				</filter>
				<filter id="filter16207-0-6" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="9.065"></feGaussianBlur>
				</filter>
				<filter id="filter16119-6-6" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.927"></feGaussianBlur>
				</filter>
				<linearGradient id="linearGradient16026-15-3">
					<stop offset="0" stopColor="#9ab7ca"></stop>
					<stop offset="1" stopColor="#9ab7ca" stopOpacity="0"></stop>
				</linearGradient>
				<filter id="filter16119-4-38-7" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.927"></feGaussianBlur>
				</filter>
				<filter
					id="filter16347-5-70-3"
					width="1.358"
					height="1.072"
					x="-0.179"
					y="-0.036"
					colorInterpolationFilters="sRGB"
				>
					<feGaussianBlur stdDeviation="3.28"></feGaussianBlur>
				</filter>
				<filter id="filter16383-3-01-2" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="1.844"></feGaussianBlur>
				</filter>
				<filter id="filter16207-1" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="9.065"></feGaussianBlur>
				</filter>
				<filter id="filter16119-0" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.927"></feGaussianBlur>
				</filter>
				<filter id="filter16119-4-09" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="0.927"></feGaussianBlur>
				</filter>
				<filter
					id="filter16347-5-73"
					width="1.358"
					height="1.072"
					x="-0.179"
					y="-0.036"
					colorInterpolationFilters="sRGB"
				>
					<feGaussianBlur stdDeviation="3.28"></feGaussianBlur>
				</filter>
				<filter id="filter16383-3-1" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="1.844"></feGaussianBlur>
				</filter>
				<filter id="filter16207-59" colorInterpolationFilters="sRGB">
					<feGaussianBlur stdDeviation="9.065"></feGaussianBlur>
				</filter>
				<linearGradient
					id="linearGradient3578"
					x1="3506.8"
					x2="3767.6"
					y1="1774.9"
					y2="1777.1"
					gradientTransform="matrix(.35966 0 0 .32664 1117.7 -436.66)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#e15f29"></stop>
					<stop offset="1" stopColor="#e15f29" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3580"
					x1="3632.8"
					x2="3398.5"
					y1="1772.7"
					y2="1768.3"
					gradientTransform="matrix(.35184 0 0 .37041 1146.6 -528.29)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#500"></stop>
					<stop offset="1" stopColor="#500" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3582"
					x1="3312.4"
					x2="3559.8"
					y1="1704.2"
					y2="1748.4"
					gradientTransform="translate(-3287.4 -1694)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient6908-1-7"
				></linearGradient>
				<linearGradient
					id="linearGradient3584"
					x1="3270.4"
					x2="3604"
					y1="1584.9"
					y2="1702"
					gradientTransform="matrix(.37041 0 0 .37639 1077.9 -540.94)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient6908-1-7"
				></linearGradient>
				<linearGradient
					id="linearGradient3586"
					x1="3346.9"
					x2="3687.5"
					y1="1558.6"
					y2="1705.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="maroon"></stop>
					<stop offset="1" stopColor="maroon" stopOpacity="0"></stop>
				</linearGradient>
				<radialGradient
					id="radialGradient3588"
					cx="3566.8"
					cy="1484.6"
					r="144.74"
					gradientTransform="matrix(.29579 -.0185 .0052 .05215 917.85 80.052)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ff0" stopOpacity="0.509"></stop>
					<stop offset="1" stopColor="#ff0" stopOpacity="0"></stop>
				</radialGradient>
				<linearGradient
					id="linearGradient3590"
					x1="3579.8"
					x2="3559.4"
					y1="1541.6"
					y2="1411.2"
					gradientTransform="matrix(.35127 0 0 .20422 726.28 -204.89)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<radialGradient
					id="radialGradient3592"
					cx="200.07"
					cy="91.431"
					r="174.38"
					gradientTransform="matrix(.96148 .05347 -.03046 .54782 1491.8 808.52)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ff0"></stop>
					<stop offset="1" stopColor="#ff0" stopOpacity="0"></stop>
				</radialGradient>
				<linearGradient
					id="linearGradient3604"
					x1="2828.5"
					x2="2825.4"
					y1="1531.3"
					y2="1471.9"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient16026-15-3"
				></linearGradient>
				<linearGradient
					id="linearGradient3606"
					x1="2828.5"
					x2="2826.2"
					y1="1506.3"
					y2="1488.3"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient16026-15-3"
				></linearGradient>
				<linearGradient
					id="linearGradient3608"
					x1="2830.9"
					x2="2819.5"
					y1="1248.8"
					y2="1476.6"
					gradientTransform="matrix(.65918 0 0 1 961.63 0)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ff0"></stop>
					<stop offset="1" stopColor="#ff0" stopOpacity="0"></stop>
				</linearGradient>
				<radialGradient
					id="radialGradient3610"
					cx="2823.8"
					cy="1478.2"
					r="11.719"
					gradientTransform="matrix(1.0333 0 0 1.15 -94.127 -221.75)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="red"></stop>
					<stop offset="1" stopColor="red" stopOpacity="0"></stop>
				</radialGradient>
				<radialGradient
					id="radialGradient3612"
					cx="3566.8"
					cy="1484.6"
					r="144.74"
					gradientTransform="matrix(.29579 -.0185 .0052 .05215 660.34 80.389)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ff0" stopOpacity="0.509"></stop>
					<stop offset="1" stopColor="#ff0" stopOpacity="0"></stop>
				</radialGradient>
				<linearGradient
					id="linearGradient3614"
					x1="3553.5"
					x2="3551.6"
					y1="1476.2"
					y2="1446.9"
					gradientTransform="matrix(.36052 0 0 .37041 436.5 -458.29)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#241c1c"></stop>
					<stop offset="1" stopColor="#241c1c" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3616"
					x1="3579.8"
					x2="3559.4"
					y1="1541.6"
					y2="1411.2"
					gradientTransform="matrix(.35127 0 0 .20422 468.77 -204.55)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fff"></stop>
					<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3618"
					x1="3960.9"
					x2="3976.6"
					y1="1238.3"
					y2="1519.5"
					gradientTransform="translate(-233.45 -76.156)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#fdffde"></stop>
					<stop offset="1" stopColor="#fdffde" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3620"
					x1="3553.5"
					x2="3551.6"
					y1="1476.2"
					y2="1446.9"
					gradientTransform="matrix(.97328 0 0 1 290.32 -73.031)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#241c1c"></stop>
					<stop offset="1" stopColor="#241c1c" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3622"
					x1="3979.7"
					x2="3978.1"
					y1="1527.4"
					y2="1346.1"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="maroon"></stop>
					<stop offset="1" stopColor="maroon" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3624"
					x1="3985.9"
					x2="3980.5"
					y1="1564.1"
					y2="1400"
					gradientTransform="translate(-233.45 -76.156)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ff0"></stop>
					<stop offset="1" stopColor="#ff0" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3626"
					x1="3978.1"
					x2="3971.9"
					y1="1718"
					y2="1300.8"
					gradientTransform="matrix(.75946 0 0 .98532 719.18 -59.272)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ff0"></stop>
					<stop offset="1" stopColor="#ff0" stopOpacity="0"></stop>
				</linearGradient>
				<radialGradient
					id="radialGradient3628"
					cx="200.07"
					cy="91.431"
					r="174.38"
					gradientTransform="matrix(.96148 .05347 -.03046 .54782 2332.4 610.52)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ff0"></stop>
					<stop offset="1" stopColor="#ff0" stopOpacity="0"></stop>
				</radialGradient>
				<linearGradient
					id="linearGradient3630"
					x1="3506.8"
					x2="3767.6"
					y1="1774.9"
					y2="1777.1"
					gradientTransform="matrix(.35966 0 0 .26131 1323.4 -296.49)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#e15f29"></stop>
					<stop offset="1" stopColor="#e15f29" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3632"
					x1="3632.8"
					x2="3398.5"
					y1="1772.7"
					y2="1768.3"
					gradientTransform="matrix(.35184 0 0 .29633 1352.3 -369.8)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#500"></stop>
					<stop offset="1" stopColor="#500" stopOpacity="0"></stop>
				</linearGradient>
				<linearGradient
					id="linearGradient3636"
					x1="3270.4"
					x2="3604"
					y1="1584.9"
					y2="1702"
					gradientTransform="matrix(.37041 0 0 .30111 1283.6 -379.92)"
					gradientUnits="userSpaceOnUse"
					xlinkHref="#linearGradient6908-1-7"
				></linearGradient>
			</defs>
			<g transform="translate(191.57 -161.81)">
				<g>
					<g>
						<g transform="translate(-2713.7 -359.44)">
							<Candle enabled={count >= 1} />
						</g>
						<g transform="translate(-2531.5 -359.44)">
							<Candle enabled={count >= 2} />
						</g>
						<g transform="translate(-2349.7 -359.44)">
							<Candle enabled={count >= 3} />
						</g>
						<g transform="translate(-2167.5 -359.44)">
							<Candle enabled={count >= 4} />
						</g>
					</g>
					<g transform="translate(-2167.5 -359.44)">
						<g transform="translate(-6)">
							<g transform="translate(66.164 1148.2)">
								<path
									fill="#035c00"
									d="M2429.7-174.35c1.442-12.246 2.127-24.423-31.456-33.506 12.604 1.017 28.298-22.374 26.531-32.535 17.954 12.141 24.57 4.125 27.971-9.605 22.494 15.393 18.871-5.125 16.001-24.608 26.873 24.937 38.926 22.545 39.757-.54 20.863 32.962 34.913 38.311 40.305 8.577 10.542 25.987 20.582 41.414 28.701 16.504 5.157 25.656 11.776 25.01 18.535 21.82 16.308 26.775 24.419 16.66 34.635 16.019-1.788 1.788-10.826 8.97-22.475 18.052-9.696 7.559-21.267 5.588-29.392 11.36-12.867 9.141-1.856 36.414-3.61 34.173-34.784-44.442-34.627 8.804-34.627 8.804-15.606-31.059-29.638-32.376-34.723-23.47-2.214 3.875-5.715 14.754-7.034 12.285-16.823-31.512-35.064-11.569-35.064 1.63 1.449-14.953-12.878-46.573-34.054-24.96z"
								></path>
								<path
									fill="#004100"
									d="M1121.5 5829.4c1.285.816 2.46 1.747 3.59 2.767 1.277 1.212 2.852 2.007 4.22 3.091 1.406 1.262 2.634 2.707 3.882 4.123 1.815 1.991 3.836 3.778 5.657 5.763 1.855 2.087 3.577 4.292 5.229 6.541 1.356 1.833 2.876 3.542 4.413 5.224 1.458 1.488 2.647 3.205 3.947 4.826a178.84 178.84 0 013.825 5.536c1.399 1.95 2.78 3.906 4.171 5.862 1.435 2.2 3.065 4.253 4.76 6.255a69.415 69.415 0 005.513 5.493c1.96 1.622 4.033 3.098 6.105 4.571 1.953 1.35 3.69 2.97 5.54 4.455 1.4 1.085 2.739 2.271 4.267 3.177.92.879 2.145 1.175 3.23 1.744 1.297.496 2.47 1.105 3.578 1.948 1.02.673 2.01 1.399 2.962 2.166l-3.42.307a41.162 41.162 0 00-2.955-2.152c-1.129-.796-2.34-1.35-3.61-1.882-1.127-.504-2.251-.977-3.214-1.78-1.492-.961-2.841-2.127-4.233-3.224-1.834-1.482-3.547-3.112-5.502-4.439-2.077-1.484-4.172-2.949-6.115-4.607a71.363 71.363 0 01-5.518-5.54c-1.69-2.017-3.308-4.092-4.77-6.283-1.39-1.958-2.78-3.914-4.174-5.87-1.26-1.851-2.495-3.72-3.846-5.508-1.28-1.624-2.484-3.317-3.93-4.804-1.54-1.69-3.056-3.411-4.402-5.261-1.628-2.247-3.343-4.437-5.195-6.505-1.847-1.975-3.879-3.766-5.701-5.766-1.257-1.398-2.487-2.838-3.923-4.057-1.389-1.056-2.922-1.913-4.203-3.117a28.118 28.118 0 00-3.661-2.73l3.483-.324z"
									filter="url(#filter6855-6-5)"
									transform="rotate(-45 -10119.349 4263.699) scale(1.7105)"
								></path>
								<path
									fill="url(#linearGradient11400)"
									d="M1129.2 5824c-.128-.01-.255.058-.424.177-4.178 2.477-9.608 3.387-14.648 3.195 6.52 14.157 15.679 29.173 28.052 39.9 15.48 13.422 34.265 26.378 53.372 37.092h.03c.942.089 1.554.062 1.365-.266-4.82-3.589-4.278-9.734-2.941-14.671.15-1.28-2.337-1.37-2.67-2.721-2.536-3.567.484-7.714 2.003-10.47-3.287 1.061-7.876-.48-7.491-3.964-.408-4.263 1.717-8.22 3.305-12.127-3.678 2.15-10.279 2.993-12.282-1.42-2.636-5.1-.94-11.285.091-16.357-3.47 3.1-10.804 2.797-12.525-1.715-2.373-3.67-2.735-8.042-3.123-12.216-2.988 3.397-6.22 8.357-11.857 7.897-3.012-.771-3.842-3.873-4.822-6.182-4.346 2.495-11.621 2.107-13.616-2.632-.905-.569-.924-3.453-1.82-3.52z"
									filter="url(#filter6983-4-3)"
									transform="matrix(1.1879 -1.1879 1.3668 1.3668 -6872.6 -6855.5)"
								></path>
							</g>
							<g transform="rotate(50 1178.152 236.309)">
								<path
									fill="#035c00"
									d="M2817.2-565.7c5.515 11.028 11.625 21.584 44.685 10.745-11.095 6.067-11.376 34.234-4.323 41.758-21.672-.296-22.803 10.036-18.11 23.38-27.253-.523-12.964 14.641.129 29.352-36.15-6.098-44.913 2.517-32.938 22.272-35.531-16.104-50.211-12.866-38.4 14.95-23.075-15.938-39.934-23.324-33.05 1.955-18.392-18.617-23.57-14.444-27.47-8.068-28.327-13.432-29.555-.525-37.744 5.618.513-2.476 4.127-13.44 8.881-27.425 3.957-11.64 14.712-16.343 18.336-25.627 5.74-14.704-18.433-31.46-15.737-30.548 53.468 18.06 24.114-26.364 24.114-26.364 30.091 17.399 42.544 10.798 41.908.563-.277-4.454-3.32-15.47-.864-14.13 31.358 17.11 35.661-9.573 28.418-20.606 6.995 13.293 36.325 31.863 42.165 2.176z"
								></path>
								<path
									fill="url(#linearGradient11402)"
									d="M2711.7-527.11c3.39 7.14 8.713 16.964 2.781 24.401-7.891 6.204-18.534 2.261-27.09.274 7.504 7.107 16.993 17.264 12.951 28.372-4.683 10.347-16.758 16.43-19.286 27.836-2.473 7.31-5.22 14.546-7.46 21.917 4.459-5.547 10.436-10.953 17.9-9.841 6.118.506 11.879 2.692 17.406 5.234 2.651-5.726 9.808-6.461 14.337-3.2 4.26 2.418 7.849 5.793 11.429 9.086-1.245-4.827-1.966-13.298 4.727-14.398 10.299.055 18.95 7.294 27.488 12.369-2.105-6.442-5.498-15.465.958-20.888 8.639-4.692 18.568-.307 27.126 2.18 2.633.074 11.428 6.374 8.728 1.81-3.358-5.656-4.244-15.093 3.065-18.364 9.584-4.296 20.512-2.444 30.568-1.408-5.158-6.555-13.173-12.824-13.689-21.626 1.043-6.776 10.273-6.585 14.992-7.006-2.497-6.59-3.135-16.51 4.484-20.31 3.746-2.52 9.945-2.222 12.997-3.18-5.13-10.657-4.3-24.207.957-35.025 4.394-4.78-2.07-1.328-5.009-.927-10.648 2.76-24.35 2.95-30.502-7.597-1.345-2.204-2.453-5.72-3.07-1.105-2.24 7.942-10.998 13.29-18.553 11.08-7.411-1.713-14.03-6.158-19.051-11.794 2.154 8.355-2.503 19.976-12.338 20.544-6.712 1.018-13.561-2.232-19.347-4.758-.047 6.885 4.773 15.997-2.231 21.354-9.805 5.79-21.54.38-30.861-3.648-1.064-.014-6.612-4.331-4.406-1.382z"
								></path>
								<path
									fill="#004100"
									d="M1217.3 5913.4c.425.011.85-.01 1.275 0 1.45.042 2.901.061 4.35.144 1.282.075 2.593.518 3.84.795 3.61.749 7.18 1.689 10.741 2.648 2.566.677 4.986 1.764 7.522 2.53 2.482.823 5.002 1.523 7.377 2.63 2.03.986 4.105 1.855 6.207 2.673 2.173.845 4.297 1.798 6.497 2.576 2.33 1.055 4.706 1.983 7.157 2.714 2.791.874 5.61 1.654 8.39 2.56 2.682.8 5.43 1.341 8.184 1.828 2.469.472 4.986.466 7.48.677 2.162.243 4.333.348 6.505.41 1.956.043 3.913.045 5.87.043h1.21c3.52.093 7.085-.247 10.575.314.85.156 1.7.306 2.554.443l-3.41.483c-.838-.145-1.674-.3-2.512-.446-2.104-.312-.79-.047 1.088-.263.414-.048-.834 0-1.25 0h-3.67c-2.66 0-5.32.01-7.981 0-1.945 0-3.89-.01-5.834-.06-2.171-.07-4.339-.19-6.499-.428-2.49-.188-4.998-.23-7.457-.714-2.754-.5-5.506-1.041-8.182-1.873-2.787-.9-5.607-1.683-8.403-2.553-2.452-.757-4.828-1.702-7.178-2.728-2.198-.788-4.323-1.751-6.504-2.585a82.914 82.914 0 01-6.2-2.692c-2.38-1.062-4.881-1.78-7.355-2.59-2.518-.79-4.948-1.837-7.502-2.52-3.554-.986-7.126-1.915-10.744-2.631-.13-.028-2.524-.555-2.742-.594-.383-.069-1.537-.085-1.156-.162 3.457-.699 2.914.09 1.213-.093l-3.456-.547z"
									filter="url(#filter6865-1-2-7)"
									transform="rotate(-45 -10355.624 4105.866) scale(1.7105)"
								></path>
								<path
									fill="url(#linearGradient11404)"
									d="M2711.2-528.07c-.051.119.078.392.491.945 3.39 7.14 8.729 16.98 2.797 24.416-7.891 6.204-18.544 2.252-27.1.264 7.504 7.107 17.006 17.277 12.964 28.385-4.682 10.346-16.748 16.412-19.276 27.818-2.132 6.302-4.462 12.573-6.5 18.898.835-.274 1.662-.553 2.494-.831 3.941-3.883 8.767-6.816 14.438-5.972.625.052 1.235.104 1.852.189 18.582-6.93 35.623-14.606 50.156-22.791 28.375-15.982 61.926-57.68 87.083-93.13-3.643-1.4-6.835-3.753-9.033-7.521-1.345-2.204-2.444-5.712-3.062-1.097-2.24 7.942-11.004 13.285-18.558 11.074-7.41-1.712-14.028-6.155-19.049-11.792 2.155 8.355-2.524 19.955-12.359 20.523-6.711 1.019-13.566-2.236-19.352-4.762-.047 6.885 4.774 15.998-2.23 21.355-9.804 5.79-21.521.4-30.842-3.628-.864-.012-4.693-2.857-4.913-2.344z"
								></path>
							</g>
							<g transform="rotate(10 -5136.733 475.645)">
								<path
									fill="#035c00"
									d="M2817.2-565.7c5.515 11.028 11.625 21.584 44.685 10.745-11.095 6.067-11.376 34.234-4.323 41.758-21.672-.296-22.803 10.036-18.11 23.38-27.253-.523-12.964 14.641.129 29.352-36.15-6.098-44.913 2.517-32.938 22.272-35.531-16.104-50.211-12.866-38.4 14.95-23.075-15.938-39.934-23.324-33.05 1.955-18.392-18.617-23.57-14.444-27.47-8.068-28.327-13.432-29.555-.525-37.744 5.618.513-2.476 4.127-13.44 8.881-27.425 3.957-11.64 14.712-16.343 18.336-25.627 5.74-14.704-18.433-31.46-15.737-30.548 53.468 18.06 24.114-26.364 24.114-26.364 30.091 17.399 42.544 10.798 41.908.563-.277-4.454-3.32-15.47-.864-14.13 31.358 17.11 35.661-9.573 28.418-20.606 6.995 13.293 36.325 31.863 42.165 2.176z"
								></path>
								<path
									fill="url(#linearGradient11402)"
									d="M2711.7-527.11c3.39 7.14 8.713 16.964 2.781 24.401-7.891 6.204-18.534 2.261-27.09.274 7.504 7.107 16.993 17.264 12.951 28.372-4.683 10.347-16.758 16.43-19.286 27.836-2.473 7.31-5.22 14.546-7.46 21.917 4.459-5.547 10.436-10.953 17.9-9.841 6.118.506 11.879 2.692 17.406 5.234 2.651-5.726 9.808-6.461 14.337-3.2 4.26 2.418 7.849 5.793 11.429 9.086-1.245-4.827-1.966-13.298 4.727-14.398 10.299.055 18.95 7.294 27.488 12.369-2.105-6.442-5.498-15.465.958-20.888 8.639-4.692 18.568-.307 27.126 2.18 2.633.074 11.428 6.374 8.728 1.81-3.358-5.656-4.244-15.093 3.065-18.364 9.584-4.296 20.512-2.444 30.568-1.408-5.158-6.555-13.173-12.824-13.689-21.626 1.043-6.776 10.273-6.585 14.992-7.006-2.497-6.59-3.135-16.51 4.484-20.31 3.746-2.52 9.945-2.222 12.997-3.18-5.13-10.657-4.3-24.207.957-35.025 4.394-4.78-2.07-1.328-5.009-.927-10.648 2.76-24.35 2.95-30.502-7.597-1.345-2.204-2.453-5.72-3.07-1.105-2.24 7.942-10.998 13.29-18.553 11.08-7.411-1.713-14.03-6.158-19.051-11.794 2.154 8.355-2.503 19.976-12.338 20.544-6.712 1.018-13.561-2.232-19.347-4.758-.047 6.885 4.773 15.997-2.231 21.354-9.805 5.79-21.54.38-30.861-3.648-1.064-.014-6.612-4.331-4.406-1.382z"
								></path>
								<path
									fill="#004100"
									d="M1217.3 5913.4c.425.011.85-.01 1.275 0 1.45.042 2.901.061 4.35.144 1.282.075 2.593.518 3.84.795 3.61.749 7.18 1.689 10.741 2.648 2.566.677 4.986 1.764 7.522 2.53 2.482.823 5.002 1.523 7.377 2.63 2.03.986 4.105 1.855 6.207 2.673 2.173.845 4.297 1.798 6.497 2.576 2.33 1.055 4.706 1.983 7.157 2.714 2.791.874 5.61 1.654 8.39 2.56 2.682.8 5.43 1.341 8.184 1.828 2.469.472 4.986.466 7.48.677 2.162.243 4.333.348 6.505.41 1.956.043 3.913.045 5.87.043h1.21c3.52.093 7.085-.247 10.575.314.85.156 1.7.306 2.554.443l-3.41.483c-.838-.145-1.674-.3-2.512-.446-2.104-.312-.79-.047 1.088-.263.414-.048-.834 0-1.25 0h-3.67c-2.66 0-5.32.01-7.981 0-1.945 0-3.89-.01-5.834-.06-2.171-.07-4.339-.19-6.499-.428-2.49-.188-4.998-.23-7.457-.714-2.754-.5-5.506-1.041-8.182-1.873-2.787-.9-5.607-1.683-8.403-2.553-2.452-.757-4.828-1.702-7.178-2.728-2.198-.788-4.323-1.751-6.504-2.585a82.914 82.914 0 01-6.2-2.692c-2.38-1.062-4.881-1.78-7.355-2.59-2.518-.79-4.948-1.837-7.502-2.52-3.554-.986-7.126-1.915-10.744-2.631-.13-.028-2.524-.555-2.742-.594-.383-.069-1.537-.085-1.156-.162 3.457-.699 2.914.09 1.213-.093l-3.456-.547z"
									filter="url(#filter6865-1-2)"
									transform="rotate(-45 -10355.624 4105.866) scale(1.7105)"
								></path>
								<path
									fill="url(#linearGradient11404)"
									d="M2711.2-528.07c-.051.119.078.392.491.945 3.39 7.14 8.729 16.98 2.797 24.416-7.891 6.204-18.544 2.252-27.1.264 7.504 7.107 17.006 17.277 12.964 28.385-4.682 10.346-16.748 16.412-19.276 27.818-2.132 6.302-4.462 12.573-6.5 18.898.835-.274 1.662-.553 2.494-.831 3.941-3.883 8.767-6.816 14.438-5.972.625.052 1.235.104 1.852.189 18.582-6.93 35.623-14.606 50.156-22.791 28.375-15.982 61.926-57.68 87.083-93.13-3.643-1.4-6.835-3.753-9.033-7.521-1.345-2.204-2.444-5.712-3.062-1.097-2.24 7.942-11.004 13.285-18.558 11.074-7.41-1.712-14.028-6.155-19.049-11.792 2.155 8.355-2.524 19.955-12.359 20.523-6.711 1.019-13.566-2.236-19.352-4.762-.047 6.885 4.774 15.998-2.23 21.355-9.804 5.79-21.521.4-30.842-3.628-.864-.012-4.693-2.857-4.913-2.344z"
								></path>
							</g>
							<g transform="rotate(40 157.9 2085.685)">
								<path
									fill="#035c00"
									d="M1289.2-242.98c11.777 3.652 23.184 7.969 17.854 42.349 4.186-11.932 31.934-16.781 40.503-11.042-3.809-21.337 6.202-24.13 20.131-21.665-4.938-26.806 12.343-15.167 28.984-4.635-11.884-34.682-4.805-44.726 16.631-36.116-21.657-32.446-20.843-47.458 8.52-40.317-19.471-20.183-29.495-35.62-3.434-32.93-21.354-15.126-18.077-20.912-12.418-25.795-17.851-25.772-5.314-29.08-.582-38.156-2.36.908-12.592 6.253-25.62 13.214-10.844 5.793-13.74 17.169-22.312 22.25-13.578 8.05-34.034-13.083-32.697-10.57 26.498 49.829-22.101 28.072-22.101 28.072 22.05 26.869 17.559 40.228 7.356 41.26-4.44.45-15.805-.765-14.083 1.441 21.972 28.166-3.658 36.742-15.72 31.385 14.251 4.745 37.335 30.673 8.988 41.254z"
								></path>
								<path
									fill="url(#linearGradient11410)"
									d="M1292.5-242.98c11.489 3.652 22.618 7.969 17.418 42.349 4.084-11.932 31.155-16.781 39.515-11.042-3.716-21.337 6.05-24.13 19.64-21.665-4.817-26.806 12.042-15.167 28.277-4.635-11.594-34.682-4.688-44.726 16.225-36.116-21.128-32.446-20.335-47.458 8.312-40.317-18.996-20.183-28.775-35.62-3.35-32.93-20.834-15.126-17.636-20.912-12.115-25.795-17.415-25.772-5.185-29.08-.568-38.156-2.303.908-12.284 6.253-24.995 13.214-10.579 5.793-13.404 17.169-21.768 22.25-13.246 8.05-33.203-13.083-31.9-10.57 25.852 49.829-21.562 28.072-21.562 28.072 21.513 26.869 17.131 40.228 7.177 41.26-4.332.45-15.419-.765-13.74 1.441 21.436 28.166-3.57 36.742-15.337 31.385 13.905 4.745 36.425 30.673 8.77 41.254z"
								></path>
								<path
									fill="#004100"
									d="M1197.8 5927.2c-.038 1.73-.043 3.46-.039 5.19-.041 1.972.075 3.949-.053 5.917-.126 2.01-.639 3.953-1.138 5.893-.754 2.65-1.496 5.301-2.371 7.915-.88 2.89-1.96 5.694-3.165 8.46-1.009 2.315-1.964 4.648-2.994 6.953-1.085 2.61-2.369 5.126-3.733 7.599-1.168 2.19-2.182 4.454-3.27 6.683-.944 1.72-1.932 3.422-2.744 5.209-.456 1.15-1.222 2.124-1.864 3.167-.766 1.418-1.611 2.773-2.596 4.05-1.137 1.398-2.024 2.975-3.002 4.484-.965 1.417-1.738 2.948-2.431 4.513-.68 1.522-1.38 3.027-1.985 4.58-.55 1.369-1.194 2.692-1.776 4.046-.574 1.487-1.242 2.938-1.8 4.433-.737 1.392-1.187 2.918-1.906 4.315a63.716 63.716 0 00-1.487 3.193c-.152.545-.436 1.037-.694 1.536l-3.462-.166c.257-.491.555-.967.693-1.51.463-1.09.98-2.162 1.493-3.225.77-1.357 1.183-2.896 1.945-4.264.544-1.502 1.193-2.963 1.77-4.452.58-1.353 1.229-2.673 1.793-4.033.612-1.558 1.29-3.077 1.99-4.596.697-1.58 1.458-3.135 2.427-4.569 1-1.508 1.891-3.092 3.012-4.514 1-1.245 1.819-2.593 2.559-4.006.604-1.056 1.42-1.993 1.886-3.13.827-1.79 1.824-3.5 2.79-5.216 1.1-2.234 2.115-4.509 3.303-6.698 1.368-2.455 2.653-4.96 3.7-7.572 1.036-2.306 2.004-4.637 3.03-6.947 1.207-2.756 2.31-5.54 3.155-8.432.882-2.6 1.627-5.238 2.33-7.892.489-1.92 1-3.84 1.116-5.83.139-1.96.04-3.929.067-5.893 0-1.73 0-3.461-.04-5.191h3.492z"
									filter="url(#filter6873-6)"
									transform="translate(-655.36 -10529) scale(1.7105)"
								></path>
								<path
									fill="url(#linearGradient11412)"
									d="M1394-402.77c-3.857 2.058-7.968 4.308-13.007 7.056-10.464 5.707-13.299 16.898-21.572 21.905-13.103 7.93-32.802-12.902-31.513-10.426 25.572 49.088-21.361 27.645-21.361 27.645 21.28 26.47 16.984 39.633 7.138 40.651-4.285.443-15.303-.752-13.641 1.422 20.45 26.76-1.8 35.579-13.853 31.436 13.785 5.758 33.903 30.027 7.402 40.125 1.912.605 3.788 1.22 5.605 2 26.242-17.284 50.622-38.82 67.784-65.294 26.139-40.324 32.262-66.32 30.667-82.934-.017-.053-.043-.105-.053-.158a18.393 18.393 0 01-.264-2.316c-.017-.069.017-.142 0-.211-.662-4.276-1.86-7.9-3.331-10.9z"
								></path>
							</g>
							<g transform="rotate(-45 -5258.586 2584.192) scale(1.21171)">
								<path
									fill="maroon"
									d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
								></path>
								<path
									fill="url(#radialGradient11414)"
									d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
								></path>
								<path
									fill="url(#linearGradient11416)"
									d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
								></path>
							</g>
							<g transform="rotate(-45 -5449.14 2743.411) scale(1.28576 1.23665)">
								<path
									fill="maroon"
									d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
								></path>
								<path
									fill="url(#radialGradient11414)"
									d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
								></path>
								<path
									fill="url(#linearGradient11416)"
									d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
								></path>
							</g>
							<g transform="rotate(-45 -5274.954 2523.672) scale(1.21171)">
								<path
									fill="maroon"
									d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
								></path>
								<path
									fill="url(#radialGradient11414)"
									d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
								></path>
								<path
									fill="url(#linearGradient11416)"
									d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
								></path>
							</g>
						</g>
						<g transform="translate(16.349 584.22)">
							<g transform="translate(-319.7 21.809)">
								<path
									fill="#035c00"
									d="M2430 341.13c2.504-12.073 4.248-24.144-28.417-36.12 12.468 2.112 30.14-19.823 29.266-30.099 16.828 13.66 24.117 6.251 28.702-7.13 21.067 17.295 19.246-3.46 18.084-23.12 24.597 27.185 36.813 25.852 39.653 2.926 17.911 34.655 31.441 41.209 39.404 12.058 8.237 26.807 16.894 43.05 27.153 18.943 2.901 26.008 9.551 25.94 16.563 23.352 13.913 28.094 22.874 18.725 33.107 18.977-1.937 1.625-11.566 7.992-23.963 16.024-10.318 6.685-21.673 3.713-30.27 8.755-13.615 7.985-5.023 36.114-6.575 33.729-30.78-47.305-35.262 5.753-35.262 5.753-12.84-32.301-26.704-34.836-32.546-26.408-2.543 3.668-6.98 14.201-8.077 11.626-14.013-32.859-33.923-14.581-35.073-1.433 2.745-14.768-8.77-47.517-31.75-27.832z"
								></path>
								<path
									fill="#004100"
									d="M1121.5 5829.4c1.285.816 2.46 1.747 3.59 2.767 1.277 1.212 2.852 2.007 4.22 3.091 1.406 1.262 2.634 2.707 3.882 4.123 1.815 1.991 3.836 3.778 5.657 5.763 1.855 2.087 3.577 4.292 5.229 6.541 1.356 1.833 2.876 3.542 4.413 5.224 1.458 1.488 2.647 3.205 3.947 4.826a178.84 178.84 0 013.825 5.536c1.399 1.95 2.78 3.906 4.171 5.862 1.435 2.2 3.065 4.253 4.76 6.255a69.415 69.415 0 005.513 5.493c1.96 1.622 4.033 3.098 6.105 4.571 1.953 1.35 3.69 2.97 5.54 4.455 1.4 1.085 2.739 2.271 4.267 3.177.92.879 2.145 1.175 3.23 1.744 1.297.496 2.47 1.105 3.578 1.948 1.02.673 2.01 1.399 2.962 2.166l-3.42.307a41.162 41.162 0 00-2.955-2.152c-1.129-.796-2.34-1.35-3.61-1.882-1.127-.504-2.251-.977-3.214-1.78-1.492-.961-2.841-2.127-4.233-3.224-1.834-1.482-3.547-3.112-5.502-4.439-2.077-1.484-4.172-2.949-6.115-4.607a71.363 71.363 0 01-5.518-5.54c-1.69-2.017-3.308-4.092-4.77-6.283-1.39-1.958-2.78-3.914-4.174-5.87-1.26-1.851-2.495-3.72-3.846-5.508-1.28-1.624-2.484-3.317-3.93-4.804-1.54-1.69-3.056-3.411-4.402-5.261-1.628-2.247-3.343-4.437-5.195-6.505-1.847-1.975-3.879-3.766-5.701-5.766-1.257-1.398-2.487-2.838-3.923-4.057-1.389-1.056-2.922-1.913-4.203-3.117a28.118 28.118 0 00-3.661-2.73l3.483-.324z"
									filter="url(#filter6855-2)"
									transform="rotate(-40.001 -11106.026 4431.37) scale(1.7105)"
								></path>
								<path
									fill="url(#linearGradient11400)"
									d="M1129.2 5824c-.128-.01-.255.058-.424.177-4.178 2.477-9.608 3.387-14.648 3.195 6.52 14.157 15.679 29.173 28.052 39.9 15.48 13.422 34.265 26.378 53.372 37.092h.03c.942.089 1.554.062 1.365-.266-4.82-3.589-4.278-9.734-2.941-14.671.15-1.28-2.337-1.37-2.67-2.721-2.536-3.567.484-7.714 2.003-10.47-3.287 1.061-7.876-.48-7.491-3.964-.408-4.263 1.717-8.22 3.305-12.127-3.678 2.15-10.279 2.993-12.282-1.42-2.636-5.1-.94-11.285.091-16.357-3.47 3.1-10.804 2.797-12.525-1.715-2.373-3.67-2.735-8.042-3.123-12.216-2.988 3.397-6.22 8.357-11.857 7.897-3.012-.771-3.842-3.873-4.822-6.182-4.346 2.495-11.621 2.107-13.616-2.632-.905-.569-.924-3.453-1.82-3.52z"
									filter="url(#filter6983-42)"
									transform="matrix(1.2869 -1.0799 1.2425 1.4807 -6254.6 -7125.3)"
								></path>
								<g transform="rotate(-35 3826.88 65.678)">
									<path
										fill="#035c00"
										d="M2803.2-180.24c7.46-9.818 15.418-19.061 45.901-2.293-9.78-8.016-4.847-35.748 3.477-41.837-21.353-3.719-20.553-14.081-13.473-26.327-26.878-4.528-10.03-16.786 5.557-28.822-36.654-.695-43.672-10.782-28.249-27.981-37.897 9.253-51.724 3.354-34.972-21.795-25.625 11.394-43.559 15.534-32.118-8.036-21.518 14.893-25.835 9.835-28.488 2.847-30.323 7.96-29.143-4.952-36.054-12.503.047 2.528 1.57 13.971 3.655 28.595 1.735 12.171 11.434 18.782 13.278 28.577 2.92 15.512-23.935 27.506-21.116 27.11 55.887-7.858 18.82 30.37 18.82 30.37 32.79-11.532 43.807-2.742 41.289 7.199-1.096 4.326-6.125 14.59-3.463 13.727 33.982-11.014 33.275 16.005 24.116 25.507 9.333-11.77 41.592-24.593 41.84 5.663z"
									></path>
									<path
										fill="url(#linearGradient11264)"
										d="M2804.3-183.28c7.361-9.547 15.224-18.529 45.752-1.884-9.816-7.919-5.113-35.016 3.14-40.908-21.322-3.806-20.606-13.939-13.642-25.865-26.837-4.641-10.133-16.503 5.316-28.157-36.555-.967-43.632-10.892-28.388-27.599-37.716 8.757-51.55 2.877-35.043-21.6-25.463 10.948-43.313 14.857-32.09-8.114-21.34 14.403-25.683 9.42-28.383 2.562-30.174 7.55-29.1-5.074-36.05-12.516.067 2.474 1.675 13.682 3.869 28.007 1.826 11.922 11.549 18.467 13.464 28.065 3.034 15.2-23.651 26.726-20.844 26.36 55.665-7.25 19.005 29.863 19.005 29.863 32.606-11.026 43.661-2.34 41.227 7.368-1.059 4.224-5.993 14.227-3.345 13.404 33.797-10.51 33.305 15.92 24.246 25.146 9.215-11.443 41.281-23.737 41.765 5.868z"
									></path>
									<path
										fill="#004100"
										d="M1197.8 5927.2c-.038 1.73-.043 3.46-.039 5.19-.041 1.972.075 3.949-.053 5.917-.126 2.01-.639 3.953-1.138 5.893-.754 2.65-1.496 5.301-2.371 7.915-.88 2.89-1.96 5.694-3.165 8.46-1.009 2.315-1.964 4.648-2.994 6.953-1.085 2.61-2.369 5.126-3.733 7.599-1.168 2.19-2.182 4.454-3.27 6.683-.944 1.72-1.932 3.422-2.744 5.209-.456 1.15-1.222 2.124-1.864 3.167-.766 1.418-1.611 2.773-2.596 4.05-1.137 1.398-2.024 2.975-3.002 4.484-.965 1.417-1.738 2.948-2.431 4.513-.68 1.522-1.38 3.027-1.985 4.58-.55 1.369-1.194 2.692-1.776 4.046-.574 1.487-1.242 2.938-1.8 4.433-.737 1.392-1.187 2.918-1.906 4.315a63.716 63.716 0 00-1.487 3.193c-.152.545-.436 1.037-.694 1.536l-3.462-.166c.257-.491.555-.967.693-1.51.463-1.09.98-2.162 1.493-3.225.77-1.357 1.183-2.896 1.945-4.264.544-1.502 1.193-2.963 1.77-4.452.58-1.353 1.229-2.673 1.793-4.033.612-1.558 1.29-3.077 1.99-4.596.697-1.58 1.458-3.135 2.427-4.569 1-1.508 1.891-3.092 3.012-4.514 1-1.245 1.819-2.593 2.559-4.006.604-1.056 1.42-1.993 1.886-3.13.827-1.79 1.824-3.5 2.79-5.216 1.1-2.234 2.115-4.509 3.303-6.698 1.368-2.455 2.653-4.96 3.7-7.572 1.036-2.306 2.004-4.637 3.03-6.947 1.207-2.756 2.31-5.54 3.155-8.432.882-2.6 1.627-5.238 2.33-7.892.489-1.92 1-3.84 1.116-5.83.139-1.96.04-3.929.067-5.893 0-1.73 0-3.461-.04-5.191h3.492z"
										filter="url(#filter6873-1-6)"
										transform="matrix(.58501 -1.6073 1.6073 .58501 -7527.4 -1870.9)"
									></path>
									<path
										fill="url(#linearGradient11266)"
										d="M2688.9-333.37c.615 4.328 1.323 8.96 2.182 14.636 1.784 11.785 11.33 18.276 13.206 27.763 2.97 15.025-23.342 26.411-20.576 26.046 54.873-7.24 18.672 29.528 18.672 29.528 32.15-10.944 43.052-2.404 40.64 7.196-1.048 4.178-5.94 14.122-3.329 13.305 32.141-10.064 32.817 13.861 24.802 23.769 10.125-10.985 39.812-21.589 40.236 6.768 1.223-1.59 2.443-3.143 3.797-4.583-7.267-30.572-19.165-60.847-38.174-86.028-28.952-38.354-51.285-52.999-67.444-57.183-.055-.002-.112.005-.166-.004a18.394 18.394 0 01-2.267-.544c-.07-.008-.128-.064-.198-.072-4.245-.84-8.06-.955-11.382-.598z"
									></path>
								</g>
								<g transform="translate(-86.683 657.58)">
									<path
										fill="#035c00"
										d="M2803.2-180.24c7.46-9.818 15.418-19.061 45.901-2.293-9.78-8.016-4.847-35.748 3.477-41.837-21.353-3.719-20.553-14.081-13.473-26.327-26.878-4.528-10.03-16.786 5.557-28.822-36.654-.695-43.672-10.782-28.249-27.981-37.897 9.253-51.724 3.354-34.972-21.795-25.625 11.394-43.559 15.534-32.118-8.036-21.518 14.893-25.835 9.835-28.488 2.847-30.323 7.96-29.143-4.952-36.054-12.503.047 2.528 1.57 13.971 3.655 28.595 1.735 12.171 11.434 18.782 13.278 28.577 2.92 15.512-23.935 27.506-21.116 27.11 55.887-7.858 18.82 30.37 18.82 30.37 32.79-11.532 43.807-2.742 41.289 7.199-1.096 4.326-6.125 14.59-3.463 13.727 33.982-11.014 33.275 16.005 24.116 25.507 9.333-11.77 41.592-24.593 41.84 5.663z"
									></path>
									<path
										fill="url(#linearGradient11268)"
										d="M2804.3-183.28c7.361-9.547 15.224-18.529 45.752-1.884-9.816-7.919-5.113-35.016 3.14-40.908-21.322-3.806-20.606-13.939-13.642-25.865-26.837-4.641-10.133-16.503 5.316-28.157-36.555-.967-43.632-10.892-28.388-27.599-37.716 8.757-51.55 2.877-35.043-21.6-25.463 10.948-43.313 14.857-32.09-8.114-21.34 14.403-25.683 9.42-28.383 2.562-30.174 7.55-29.1-5.074-36.05-12.516.067 2.474 1.675 13.682 3.869 28.007 1.826 11.922 11.549 18.467 13.464 28.065 3.034 15.2-23.651 26.726-20.844 26.36 55.665-7.25 19.005 29.863 19.005 29.863 32.606-11.026 43.661-2.34 41.227 7.368-1.059 4.224-5.993 14.227-3.345 13.404 33.797-10.51 33.305 15.92 24.246 25.146 9.215-11.443 41.281-23.737 41.765 5.868z"
									></path>
									<path
										fill="#004100"
										d="M1197.8 5927.2c-.038 1.73-.043 3.46-.039 5.19-.041 1.972.075 3.949-.053 5.917-.126 2.01-.639 3.953-1.138 5.893-.754 2.65-1.496 5.301-2.371 7.915-.88 2.89-1.96 5.694-3.165 8.46-1.009 2.315-1.964 4.648-2.994 6.953-1.085 2.61-2.369 5.126-3.733 7.599-1.168 2.19-2.182 4.454-3.27 6.683-.944 1.72-1.932 3.422-2.744 5.209-.456 1.15-1.222 2.124-1.864 3.167-.766 1.418-1.611 2.773-2.596 4.05-1.137 1.398-2.024 2.975-3.002 4.484-.965 1.417-1.738 2.948-2.431 4.513-.68 1.522-1.38 3.027-1.985 4.58-.55 1.369-1.194 2.692-1.776 4.046-.574 1.487-1.242 2.938-1.8 4.433-.737 1.392-1.187 2.918-1.906 4.315a63.716 63.716 0 00-1.487 3.193c-.152.545-.436 1.037-.694 1.536l-3.462-.166c.257-.491.555-.967.693-1.51.463-1.09.98-2.162 1.493-3.225.77-1.357 1.183-2.896 1.945-4.264.544-1.502 1.193-2.963 1.77-4.452.58-1.353 1.229-2.673 1.793-4.033.612-1.558 1.29-3.077 1.99-4.596.697-1.58 1.458-3.135 2.427-4.569 1-1.508 1.891-3.092 3.012-4.514 1-1.245 1.819-2.593 2.559-4.006.604-1.056 1.42-1.993 1.886-3.13.827-1.79 1.824-3.5 2.79-5.216 1.1-2.234 2.115-4.509 3.303-6.698 1.368-2.455 2.653-4.96 3.7-7.572 1.036-2.306 2.004-4.637 3.03-6.947 1.207-2.756 2.31-5.54 3.155-8.432.882-2.6 1.627-5.238 2.33-7.892.489-1.92 1-3.84 1.116-5.83.139-1.96.04-3.929.067-5.893 0-1.73 0-3.461-.04-5.191h3.492z"
										filter="url(#filter6873-1)"
										transform="matrix(.58501 -1.6073 1.6073 .58501 -7527.4 -1870.9)"
									></path>
									<path
										fill="url(#linearGradient11266)"
										d="M2688.9-333.37c.615 4.328 1.323 8.96 2.182 14.636 1.784 11.785 11.33 18.276 13.206 27.763 2.97 15.025-23.342 26.411-20.576 26.046 54.873-7.24 18.672 29.528 18.672 29.528 32.15-10.944 43.052-2.404 40.64 7.196-1.048 4.178-5.94 14.122-3.329 13.305 32.141-10.064 32.817 13.861 24.802 23.769 10.125-10.985 39.812-21.589 40.236 6.768 1.223-1.59 2.443-3.143 3.797-4.583-7.267-30.572-19.165-60.847-38.174-86.028-28.952-38.354-51.285-52.999-67.444-57.183-.055-.002-.112.005-.166-.004a18.394 18.394 0 01-2.267-.544c-.07-.008-.128-.064-.198-.072-4.245-.84-8.06-.955-11.382-.598z"
									></path>
								</g>
								<g transform="rotate(5 -4882.446 -873.636)">
									<path
										fill="#035c00"
										d="M2903-411.52c1.41 12.249 3.542 24.258 38.315 25.38-12.501 1.907-22.399 28.279-18.344 37.762-20.264-7.69-24.86 1.631-25.015 15.776-25.43-9.812-17.188 9.325-9.917 27.626-31.885-18.094-43.065-12.996-38.57 9.663-27.88-27.285-42.782-29.263-41.197.914-16.232-22.869-29.548-35.575-31.725-9.466-10.915-23.784-17.208-21.634-23.054-16.976-22.025-22.31-27.594-10.602-37.39-7.631 1.33-2.151 8.474-11.217 17.725-22.733 7.7-9.585 19.414-10.326 25.995-17.811 10.422-11.854-6.562-35.866-4.34-34.088 44.067 35.259 31.676-16.527 31.676-16.527 22.326 26.64 36.285 24.698 39.188 14.863 1.264-4.28 2.171-15.674 4.022-13.574 23.615 26.803 36.784 3.201 33.75-9.644 2.027 14.884 23.237 42.366 38.88 16.466z"
									></path>
									<path
										fill="url(#linearGradient11272)"
										d="M2790.7-411.34c.744 7.869 2.385 18.921-5.732 23.88-9.537 3.13-18.19-4.214-25.55-9.008 4.62 9.245 10.063 22.035 2.466 31.09-7.939 8.121-21.367 9.707-27.644 19.561-4.824 6.024-9.88 11.883-14.506 18.044 6.087-3.687 13.553-6.723 20.187-3.125 5.575 2.568 10.241 6.592 14.565 10.872 4.45-4.474 11.427-2.717 14.567 1.896 3.177 3.729 5.395 8.129 7.633 12.447.48-4.961 2.7-13.168 9.366-11.913 9.66 3.574 15.314 13.336 21.6 21.025.225-6.773.123-16.413 8.045-19.3 9.722-1.454 17.553 6.063 24.744 11.327 2.448.969 8.56 9.898 7.583 4.685-1.222-6.463 1.174-15.635 9.16-16.208 10.476-.758 20.111 4.719 29.206 9.132-2.605-7.924-7.993-16.556-5.467-25.004 3.298-6.01 11.905-2.674 16.484-1.456-.092-7.046 2.7-16.586 11.16-17.55 4.382-1.088 10.105 1.312 13.301 1.457-1.174-11.77 4.238-24.219 12.878-32.586 5.765-2.988-1.49-1.956-4.389-2.583-10.95-1.048-23.89-5.558-26.064-17.571-.51-2.531-.348-6.215-2.507-2.09-4.822 6.697-14.881 8.727-21.224 4.067-6.378-4.144-11.078-10.585-13.868-17.6-.833 8.588-9.184 17.916-18.621 15.086-6.655-1.339-11.98-6.736-16.553-11.088-2.399 6.453-.986 16.665-9.4 19.303-11.193 2.086-20.371-7.01-27.752-13.983-.995-.378-4.731-6.332-3.667-2.806z"
									></path>
									<path
										fill="#004100"
										d="M1217.3 5913.4c.425.011.85-.01 1.275 0 1.45.042 2.901.061 4.35.144 1.282.075 2.593.518 3.84.795 3.61.749 7.18 1.689 10.741 2.648 2.566.677 4.986 1.764 7.522 2.53 2.482.823 5.002 1.523 7.377 2.63 2.03.986 4.105 1.855 6.207 2.673 2.173.845 4.297 1.798 6.497 2.576 2.33 1.055 4.706 1.983 7.157 2.714 2.791.874 5.61 1.654 8.39 2.56 2.682.8 5.43 1.341 8.184 1.828 2.469.472 4.986.466 7.48.677 2.162.243 4.333.348 6.505.41 1.956.043 3.913.045 5.87.043h1.21c3.52.093 7.085-.247 10.575.314.85.156 1.7.306 2.554.443l-3.41.483c-.838-.145-1.674-.3-2.512-.446-2.104-.312-.79-.047 1.088-.263.414-.048-.834 0-1.25 0h-3.67c-2.66 0-5.32.01-7.981 0-1.945 0-3.89-.01-5.834-.06-2.171-.07-4.339-.19-6.499-.428-2.49-.188-4.998-.23-7.457-.714-2.754-.5-5.506-1.041-8.182-1.873-2.787-.9-5.607-1.683-8.403-2.553-2.452-.757-4.828-1.702-7.178-2.728-2.198-.788-4.323-1.751-6.504-2.585a82.914 82.914 0 01-6.2-2.692c-2.38-1.062-4.881-1.78-7.355-2.59-2.518-.79-4.948-1.837-7.502-2.52-3.554-.986-7.126-1.915-10.744-2.631-.13-.028-2.524-.555-2.742-.594-.383-.069-1.537-.085-1.156-.162 3.457-.699 2.914.09 1.213-.093l-3.456-.547z"
										filter="url(#filter6865-19)"
										transform="scale(1.71046) rotate(-25 -12372.9 1992.424)"
									></path>
									<path
										fill="url(#linearGradient11274)"
										d="M2790.5-412.41c-.088.094-.06.395.139 1.056.744 7.869 2.394 18.941-5.723 23.9-9.538 3.13-18.195-4.226-25.556-9.02 4.62 9.244 10.07 22.05 2.474 31.107-7.94 8.12-21.351 9.694-27.628 19.548-4.16 5.192-8.493 10.288-12.572 15.535.88.027 1.752.048 2.628.072 5.032-2.301 10.57-3.407 15.61-.674.57.262 1.125.52 1.676.811 19.832-.157 38.471-1.541 54.926-4.262 32.13-5.313 77.92-33.021 113.68-57.73-2.944-2.561-5.14-5.865-5.916-10.158-.51-2.531-.343-6.203-2.502-2.077-4.821 6.696-14.884 8.72-21.226 4.059-6.378-4.144-11.077-10.582-13.867-17.597-.833 8.588-9.196 17.888-18.633 15.058-6.655-1.338-11.982-6.742-16.556-11.094-2.399 6.453-.985 16.666-9.399 19.304-11.193 2.087-20.36-6.985-27.741-13.958-.808-.307-3.433-4.29-3.816-3.883z"
									></path>
								</g>
								<g transform="scale(1.2117) rotate(-40 -5907.921 1807.86)">
									<path
										fill="maroon"
										d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
									></path>
									<path
										fill="url(#radialGradient11414)"
										d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
									></path>
									<path
										fill="url(#linearGradient11416)"
										d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
									></path>
								</g>
								<g transform="matrix(.98495 -.82647 .7949 .94733 -3243 -4191.4)">
									<path
										fill="maroon"
										d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
									></path>
									<path
										fill="url(#radialGradient11414)"
										d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
									></path>
									<path
										fill="url(#linearGradient11416)"
										d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
									></path>
								</g>
								<g transform="scale(1.2117) rotate(-40 -5920.614 1751.37)">
									<path
										fill="maroon"
										d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
									></path>
									<path
										fill="url(#radialGradient11414)"
										d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
									></path>
									<path
										fill="url(#linearGradient11416)"
										d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
									></path>
								</g>
							</g>
							<g transform="translate(-296.61 647.34)">
								<g transform="translate(291.89 -28.568)">
									<path
										fill="#035c00"
										d="M2000.7-178.67c6.674 10.368 12.638 21.007-13.544 43.917 10.877-6.45 35.25 7.672 38.125 17.577 10.797-18.793 20.261-14.498 29.347-3.656 13.448-23.71 19.205-3.685 25.183 15.08 13.19-34.206 25.068-37.351 35.955-16.976 4.266-38.776 14.538-49.753 32.442-25.408-1.942-27.977.301-46.245 18.536-27.432-6.635-25.314-.405-27.64 7.068-27.743 2.892-31.217 14.621-25.692 24.08-29.603-2.391-.821-13.665-3.304-28.12-6.346-12.03-2.532-21.56 4.32-31.395 2.703-15.575-2.561-17.66-31.899-18.253-29.115-11.73 55.204-34.975 7.298-34.975 7.298-.378 34.757-12.407 42.103-20.886 36.336-3.69-2.51-11.615-10.746-11.715-7.949-1.273 35.7-26.42 25.794-32.217 13.937 7.868 12.796 8.885 47.496-19.63 37.38z"
									></path>
									<path
										fill="url(#linearGradient11288)"
										d="M2003.2-176.59c6.454 10.183 12.204 20.643-13.878 43.637 10.799-6.515 34.653 7.171 37.368 16.941 10.869-18.733 20.145-14.595 28.971-3.972 13.541-23.631 18.974-3.878 24.641 14.625 13.412-34.02 25.158-37.275 35.644-17.237 4.671-38.436 14.928-49.426 32.283-25.542-1.579-27.671.853-45.783 18.6-27.38-6.236-24.98-.067-27.356 7.3-27.548 3.226-30.937 14.72-25.608 24.092-29.594-2.348-.784-13.43-3.106-27.641-5.944-11.828-2.362-21.304 4.536-30.978 3.053-15.322-2.348-17.025-31.365-17.642-28.602-12.226 54.788-34.562 7.645-34.562 7.645-.791 34.411-12.735 41.828-21.024 36.221-3.608-2.44-11.32-10.498-11.452-7.728-1.684 35.355-26.352 25.852-31.923 14.184 7.601 12.573 8.187 46.91-19.8 37.24z"
									></path>
									<path
										fill="#004100"
										d="M1197.8 5927.2c-.038 1.73-.043 3.46-.039 5.19-.041 1.972.075 3.949-.053 5.917-.126 2.01-.639 3.953-1.138 5.893-.754 2.65-1.496 5.301-2.371 7.915-.88 2.89-1.96 5.694-3.165 8.46-1.009 2.315-1.964 4.648-2.994 6.953-1.085 2.61-2.369 5.126-3.733 7.599-1.168 2.19-2.182 4.454-3.27 6.683-.944 1.72-1.932 3.422-2.744 5.209-.456 1.15-1.222 2.124-1.864 3.167-.766 1.418-1.611 2.773-2.596 4.05-1.137 1.398-2.024 2.975-3.002 4.484-.965 1.417-1.738 2.948-2.431 4.513-.68 1.522-1.38 3.027-1.985 4.58-.55 1.369-1.194 2.692-1.776 4.046-.574 1.487-1.242 2.938-1.8 4.433-.737 1.392-1.187 2.918-1.906 4.315a63.716 63.716 0 00-1.487 3.193c-.152.545-.436 1.037-.694 1.536l-3.462-.166c.257-.491.555-.967.693-1.51.463-1.09.98-2.162 1.493-3.225.77-1.357 1.183-2.896 1.945-4.264.544-1.502 1.193-2.963 1.77-4.452.58-1.353 1.229-2.673 1.793-4.033.612-1.558 1.29-3.077 1.99-4.596.697-1.58 1.458-3.135 2.427-4.569 1-1.508 1.891-3.092 3.012-4.514 1-1.245 1.819-2.593 2.559-4.006.604-1.056 1.42-1.993 1.886-3.13.827-1.79 1.824-3.5 2.79-5.216 1.1-2.234 2.115-4.509 3.303-6.698 1.368-2.455 2.653-4.96 3.7-7.572 1.036-2.306 2.004-4.637 3.03-6.947 1.207-2.756 2.31-5.54 3.155-8.432.882-2.6 1.627-5.238 2.33-7.892.489-1.92 1-3.84 1.116-5.83.139-1.96.04-3.929.067-5.893 0-1.73 0-3.461-.04-5.191h3.492z"
										filter="url(#filter6873-5)"
										transform="rotate(40.001 16348.062 5130.408) scale(1.7105)"
									></path>
									<path
										fill="url(#linearGradient11290)"
										d="M2183.7-233.71c-4.277-.903-8.873-1.822-14.5-2.955-11.685-2.355-21.05 4.396-30.606 2.913-15.134-2.347-16.835-30.968-17.438-28.243-11.964 54.041-34.133 7.447-34.133 7.447-.712 33.955-12.465 41.278-20.662 35.728-3.567-2.415-11.239-10.413-11.364-7.68-1.536 33.646-24.249 26.098-30.819 15.178 6.86 13.272 6.67 44.795-20.121 35.495 1.075 1.692 2.117 3.37 3.007 5.135 31.214 3.627 63.732 2.802 93.896-6.448 45.943-14.088 67.343-30.066 76.801-43.819.015-.056.04-.106.057-.155.414-.716.842-1.362 1.287-1.945.04-.059.101-.1.137-.16 2.24-3.702 3.654-7.248 4.454-10.492z"
									></path>
								</g>
								<g transform="translate(1385.9 127.22)">
									<path
										fill="#035c00"
										d="M871.22-529.11c10.858-5.842 21.226-12.266 9.404-44.986 6.396 10.908 34.559 10.347 41.869 3.071.352 21.671 10.713 22.493 23.91 17.404.294 27.255 15.023 12.52 29.336-1.007-5.014 36.316 3.859 44.818 23.247 32.257-15.035 35.997-11.358 50.573 16.092 37.936-15.241 23.54-22.12 40.614 2.942 32.977-18.058 18.94-13.732 23.99-7.242 27.698-12.579 28.716.36 29.559 6.744 37.56-2.49-.44-13.557-3.723-27.678-8.057-11.753-3.607-16.776-14.216-26.164-17.561-14.869-5.297-30.894 19.366-30.064 16.643 16.453-53.985-27.073-23.314-27.073-23.314 16.491-30.598 9.52-42.848-.69-41.906-4.445.41-15.366 3.782-14.099 1.286 16.164-31.855-10.635-35.36-21.446-27.79 13.078-7.389 30.763-37.261.913-42.211z"
									></path>
									<path
										fill="#035c00"
										d="M1215-348.49c-5.87 10.843-11.012 21.903 16.828 42.767-11.334-5.608-34.568 10.317-36.686 20.411-12.188-17.922-21.3-12.923-29.54-1.425-15.203-22.623-19.428-2.221-23.97 16.942-15.74-33.11-27.823-35.347-37.136-14.207-7.188-38.342-18.261-48.51-34.272-22.881-.18-28.044-3.8-46.09-20.558-25.952 4.7-25.744-1.687-27.592-9.147-27.129-5.246-30.909-16.523-24.512-26.251-27.697 2.323-1 13.376-4.328 27.559-8.455 11.804-3.435 21.826 2.677 31.51.32 15.336-3.732 15.197-33.143 15.998-30.412 15.874 54.158 35.427 4.63 35.427 4.63 3.007 34.63 15.557 41.045 23.576 34.653 3.49-2.782 10.769-11.594 11.08-8.813 3.97 35.501 28.296 23.721 33.179 11.46-6.877 13.355-5.266 48.032 22.403 35.788z"
									></path>
									<path
										fill="url(#linearGradient11292)"
										d="M1122.9-412.77c-3.904 6.872-8.899 16.867-18.393 16.274-9.608-2.906-12.483-13.885-15.763-22.034-1.518 10.223-4.395 23.822-15.812 26.882-11.161 2.099-23.07-4.304-33.864.167-7.407 2.167-14.909 4.068-22.233 6.46 7.101.47 14.958 2.267 18.329 9.019 3.094 5.302 4.608 11.274 5.695 17.26 6.211-1.113 10.92 4.328 10.845 9.909.463 4.876-.243 9.752-.887 14.574 3.24-3.789 9.765-9.238 14.506-4.387 5.863 8.468 4.895 19.707 5.634 29.612 4.07-5.42 9.515-13.374 17.66-11.195 8.798 4.385 10.901 15.035 13.772 23.471 1.45 2.198 1.335 13.017 3.524 8.187 2.707-5.995 9.93-12.134 16.801-8.023 9.016 5.388 13.767 15.4 18.686 24.232 2.412-7.985 2.95-18.147 9.864-23.617 6.148-3.031 11.286 4.639 14.338 8.263 3.966-5.825 11.726-12.038 19.209-7.976 4.213 1.622 7.524 6.871 10.059 8.823 5.788-10.315 17.363-17.408 29.24-19.307 6.435.859-.1-2.457-2.114-4.634-8.368-7.139-16.382-18.255-11.272-29.343 1.034-2.366 3.279-5.29-.856-3.15-7.79 2.72-17.195-1.386-19.717-8.842-2.848-7.053-3.003-15.025-1.266-22.37-5.608 6.556-17.799 9.407-23.906 1.676-4.683-4.913-5.95-12.39-7.2-18.577-5.666 3.91-10.366 13.085-18.772 10.42-10.366-4.71-12.666-17.426-14.713-27.371-.598-.88-.244-7.9-1.395-4.402z"
									></path>
									<path
										fill="#004100"
										d="M1121.5 5829.4c1.285.816 2.46 1.747 3.59 2.767 1.277 1.212 2.852 2.007 4.22 3.091 1.406 1.262 2.634 2.707 3.882 4.123 1.815 1.991 3.836 3.778 5.657 5.763 1.855 2.087 3.577 4.292 5.229 6.541 1.356 1.833 2.876 3.542 4.413 5.224 1.458 1.488 2.647 3.205 3.947 4.826a178.84 178.84 0 013.825 5.536c1.399 1.95 2.78 3.906 4.171 5.862 1.435 2.2 3.065 4.253 4.76 6.255a69.415 69.415 0 005.513 5.493c1.96 1.622 4.033 3.098 6.105 4.571 1.953 1.35 3.69 2.97 5.54 4.455 1.4 1.085 2.739 2.271 4.267 3.177.92.879 2.145 1.175 3.23 1.744 1.297.496 2.47 1.105 3.578 1.948 1.02.673 2.01 1.399 2.962 2.166l-3.42.307a41.162 41.162 0 00-2.955-2.152c-1.129-.796-2.34-1.35-3.61-1.882-1.127-.504-2.251-.977-3.214-1.78-1.492-.961-2.841-2.127-4.233-3.224-1.834-1.482-3.547-3.112-5.502-4.439-2.077-1.484-4.172-2.949-6.115-4.607a71.363 71.363 0 01-5.518-5.54c-1.69-2.017-3.308-4.092-4.77-6.283-1.39-1.958-2.78-3.914-4.174-5.87-1.26-1.851-2.495-3.72-3.846-5.508-1.28-1.624-2.484-3.317-3.93-4.804-1.54-1.69-3.056-3.411-4.402-5.261-1.628-2.247-3.343-4.437-5.195-6.505-1.847-1.975-3.879-3.766-5.701-5.766-1.257-1.398-2.487-2.838-3.923-4.057-1.389-1.056-2.922-1.913-4.203-3.117a28.118 28.118 0 00-3.661-2.73l3.483-.324z"
										filter="url(#filter6855-6-44)"
										transform="matrix(1.6845 .29702 -.29702 1.6845 743.88 -10705)"
									></path>
									<path
										fill="#004100"
										d="M1217.3 5913.4c.425.011.85-.01 1.275 0 1.45.042 2.901.061 4.35.144 1.282.075 2.593.518 3.84.795 3.61.749 7.18 1.689 10.741 2.648 2.566.677 4.986 1.764 7.522 2.53 2.482.823 5.002 1.523 7.377 2.63 2.03.986 4.105 1.855 6.207 2.673 2.173.845 4.297 1.798 6.497 2.576 2.33 1.055 4.706 1.983 7.157 2.714 2.791.874 5.61 1.654 8.39 2.56 2.682.8 5.43 1.341 8.184 1.828 2.469.472 4.986.466 7.48.677 2.162.243 4.333.348 6.505.41 1.956.043 3.913.045 5.87.043h1.21c3.52.093 7.085-.247 10.575.314.85.156 1.7.306 2.554.443l-3.41.483c-.838-.145-1.674-.3-2.512-.446-2.104-.312-.79-.047 1.088-.263.414-.048-.834 0-1.25 0h-3.67c-2.66 0-5.32.01-7.981 0-1.945 0-3.89-.01-5.834-.06-2.171-.07-4.339-.19-6.499-.428-2.49-.188-4.998-.23-7.457-.714-2.754-.5-5.506-1.041-8.182-1.873-2.787-.9-5.607-1.683-8.403-2.553-2.452-.757-4.828-1.702-7.178-2.728-2.198-.788-4.323-1.751-6.504-2.585a82.914 82.914 0 01-6.2-2.692c-2.38-1.062-4.881-1.78-7.355-2.59-2.518-.79-4.948-1.837-7.502-2.52-3.554-.986-7.126-1.915-10.744-2.631-.13-.028-2.524-.555-2.742-.594-.383-.069-1.537-.085-1.156-.162 3.457-.699 2.914.09 1.213-.093l-3.456-.547z"
										filter="url(#filter6865-1-5)"
										transform="matrix(1.6845 .29702 -.29702 1.6845 743.88 -10705)"
									></path>
									<path
										fill="url(#linearGradient11400)"
										d="M1129.2 5824c-.128-.01-.255.058-.424.177-4.178 2.477-9.608 3.387-14.648 3.195 6.52 14.157 15.679 29.173 28.052 39.9 15.48 13.422 34.265 26.378 53.372 37.092h.03c.942.089 1.554.062 1.365-.266-4.82-3.589-4.278-9.734-2.941-14.671.15-1.28-2.337-1.37-2.67-2.721-2.536-3.567.484-7.714 2.003-10.47-3.287 1.061-7.876-.48-7.491-3.964-.408-4.263 1.717-8.22 3.305-12.127-3.678 2.15-10.279 2.993-12.282-1.42-2.636-5.1-.94-11.285.091-16.357-3.47 3.1-10.804 2.797-12.525-1.715-2.373-3.67-2.735-8.042-3.123-12.216-2.988 3.397-6.22 8.357-11.857 7.897-3.012-.771-3.842-3.873-4.822-6.182-4.346 2.495-11.621 2.107-13.616-2.632-.905-.569-.924-3.453-1.82-3.52z"
										filter="url(#filter6983-4-7)"
										transform="matrix(1.6544 .29172 -.33566 1.9036 1008.5 -11981)"
									></path>
									<path
										fill="url(#linearGradient11296)"
										d="M1123.4-413.73c-.126.026-.277.289-.492.945-3.904 6.872-8.903 16.889-18.396 16.296-9.609-2.906-12.481-13.9-15.761-22.047-1.518 10.223-4.399 23.84-15.816 26.9-11.161 2.1-23.05-4.305-33.843.166-6.385 1.868-12.858 3.557-19.21 5.514.706.528 1.408 1.045 2.113 1.567 5.441 1.001 10.612 3.272 13.173 8.402.316.541.623 1.07.908 1.625 16.335 11.247 32.397 20.803 47.437 28.013 29.367 14.077 82.768 17.643 126.24 17.917-.943-3.786-.847-7.752.98-11.714 1.033-2.366 3.276-5.277-.859-3.137-7.79 2.72-17.194-1.393-19.716-8.85-2.847-7.052-3.003-15.021-1.266-22.367-5.608 6.557-17.794 9.378-23.901 1.647-4.684-4.913-5.949-12.395-7.199-18.583-5.666 3.91-10.366 13.087-18.772 10.422-10.366-4.71-12.67-17.4-14.718-27.345-.486-.715-.352-5.482-.898-5.369z"
									></path>
									<g transform="rotate(10 43794.474 321.588) scale(1.21171)">
										<path
											fill="maroon"
											d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
										></path>
										<path
											fill="url(#radialGradient11414)"
											d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
										></path>
										<path
											fill="url(#linearGradient11416)"
											d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
										></path>
									</g>
									<g transform="matrix(1.2662 .22327 -.21474 1.2179 696.78 -7788.4)">
										<path
											fill="maroon"
											d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
										></path>
										<path
											fill="url(#radialGradient11414)"
											d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
										></path>
										<path
											fill="url(#linearGradient11416)"
											d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
										></path>
									</g>
									<g transform="rotate(10 43735.686 590.888) scale(1.21171)">
										<path
											fill="maroon"
											d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
										></path>
										<path
											fill="url(#radialGradient11414)"
											d="M1262.2 5827.6a24.749 24.496 0 11-49.497 0 24.749 24.496 0 1149.497 0z"
										></path>
										<path
											fill="url(#linearGradient11416)"
											d="M1236.3 5804.6c-3.897.415-7.99 1.022-11.031 3.687.178 14.298 15.827 25.647 29.5 21.22 1.969-.745 4.954-1.187 5.875-3.157-.42-12.204-12.025-22.666-24.344-21.75z"
										></path>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
}

export class AdventWreath extends React.Component<{ adventCalculator: AdventCalculator }, { count: number }> {
	constructor(props: Readonly<{ adventCalculator: AdventCalculator }>) {
		super(props);
		this.state = {
			count: 0
		};

		this.props.adventCalculator.calculated = (count) => {
			this.setState({
				count: count
			});
		}
	}

	render() {
		return <div style={{ display: "flex", alignItems: "stretch", height: "100%" }}>
			<div style={{ flexGrow: 1, display: "flex" }}>
				<Wreath count={this.state.count} style={{ display: "flex", flexGrow: 1 }} />
			</div>
		</div>;
	}
}