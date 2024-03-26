//variableStart
const documentRoutes = {
    turnlock10: {
        imagesVideos: ['turnlock101.png', 'turnlock102.png'],
        drawings: [],
        specifications: ['Boon Edam Spec_Turnlock 100_Rev_012023.docx'],
        miscellaneous: ['turnlock101.png'],
    },
    tourlock18: {
        imagesVideos: ['turnlock101.png', 'turnlock102.png', 'turnlock103.png', 'turnlock104.mp4', 'turnlock104.png', 'turnlock105.png'],
        drawings: ['TURNLOCK-100EC CUTSHEET.pdf', 'TURNLOCK-100EC2-18 CUSTOM FEATURES CUTSHEET.pdf', 'TURNLOCK-100ECP CUTSHEET.pdf', 'TURNLOCK-100ES CUTSHEET.pdf', 'TURNLOCK-100TC CUTSHEET.pdf', 'TURNLOCK-100TCP CUTSHEET.pdf', 'TURNLOCK-100TS -CUTSHEET.pdf'],
        specifications: ['Boon Edam Spec_Turnlock 100_Rev_012023.docx', 'Boon Edam Spec_Turnlock 100_Rev_012023.docx', 'Boon Edam Spec_Turnlock 100_Rev_012023.docx', 'Boon Edam Spec_Turnlock 100_Rev_012023.docx'],
        miscellaneous: ['turnlock101.png'],
    },
    lifelineSw: {
        imagesVideos: ['turnlock101.png', 'turnlock102.png', 'turnlock103.png', 'turnlock104.mp4', 'turnlock104.png', 'turnlock105.png'],
        drawings: ['TURNLOCK-100EC CUTSHEET.pdf', 'TURNLOCK-100EC2-18 CUSTOM FEATURES CUTSHEET.pdf', 'TURNLOCK-100ECP CUTSHEET.pdf', 'TURNLOCK-100ES CUTSHEET.pdf', 'TURNLOCK-100TC CUTSHEET.pdf', 'TURNLOCK-100TCP CUTSHEET.pdf', 'TURNLOCK-100TS -CUTSHEET.pdf'],
        specifications: [],
        miscellaneous: ['turnlock101.png'],
    },
    circlelockSo: {
        imagesVideos: ['turnlock101.png', 'turnlock102.png', 'turnlock103.png', 'turnlock104.mp4'],
        drawings: ['TURNLOCK-100EC CUTSHEET.pdf', 'TURNLOCK-100EC2-18 CUSTOM FEATURES CUTSHEET.pdf'],
        specifications: [],
        miscellaneous: ['turnlock101.png'],
    },
    circlelockCombi: {
        imagesVideos: ['turnlock101.png'],
        drawings: [],
        specifications: [],
        miscellaneous: ['turnlock101.png'],
    },
};
//variableEnd

// Variables
let video1,
	video2,
	video3,
	subVideo1,
	subVideo2,
	subVideo3,
	buttonContainerMade,
	buttonGrid,
	threesixty,
	cornerIcons,
	documents,
	inputButtonGrid,
	delay,
	subVideoTurn,
	subVideoBackLoop,
	buttonDimensions,
	firstPage,
	SecondPage,
	rotationPage,
	textContent,
	label,
	labelCont,
	paragraph,
	greenLine,
	titleH2,
	createdSubTitle,
	span,
	line,
	svg1,
	circle,
	backButton,
	backButtonRotation,
	brandIcon,
	backButtonContainer,
	backButtonContainerRotation,
	buttonGridContainer,
	buttonFontvar,
	globalFontvar,
	containVideoWidth,
	containVideoHeight,
	pCont,
	pCont2,
	list,
	pageIndex,
	nextButton,
	specificVideo,
	globalTitleFontvar,
	globalMediumTitleFontvar,
	globalBigTitleFontvar,
	textLeft,
	textTop,
	textRight,
	textBottom,
	labelTitle,
	pContent,
	pContent2,
	subTitle,
	inputButtonId,
	delayInput,
	paint,
	clearcheck,
	elementContainer

let currentButton = 'mainMenuFront'
let boxVideo = []
let buttonShort = []
let dataId = []
let dataVariant = []
let video1check = false
let video2check = false
let video3check = false

let x = window.matchMedia('(max-height: 550px)')
const loop = document.querySelector('#loopVideo')
const loopContainer = document.querySelector('#loop')
const video1Container = document.querySelector('#video1')
const video2Container = document.querySelector('#video2')
const video3Container = document.querySelector('#video3')
const specificVideoContainer = document.querySelector('#specificVideo')
const subVideo1Container = document.querySelector('#subVideo1')
const subVideo2Container = document.querySelector('#subVideo2')
const subVideo3Container = document.querySelector('#subVideo3')
const subVideoTurnContainer = document.querySelector('#subVideoTurn')
const subVideoBackLoopContainer = document.querySelector('#subVideoBackLoop')
const rotation = document.querySelector('#rotation')
const videoHolder = document.querySelector('#videoHolder')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const svgContainer = document.querySelectorAll('.svgContainer')
const buttonContainer = document.querySelectorAll('.buttonContainer')
const mainContainer = document.querySelector('.container')
const loader = document.querySelector('.loader')
const viewR_button = document.querySelector('#viewR_button')
const initial = document.querySelector('.initial')
const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
const quality = document.querySelector('#quality_button')
const mainMenuB = document.querySelectorAll('.mainMenuB')
const titulo = document.querySelectorAll('.titulo')
const subVideoFinish1 = document.querySelector('#subVideoFinish1')
const subVideoFinish2 = document.querySelector('#subVideoFinish2')
const subVideoFinish3 = document.querySelector('#subVideoFinish3')

let isMobile = false
window.mobileCheck = function () {
	let mobile = (function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			isMobile = true
	})(navigator.userAgent || window.opera)
	console.log(isMobile)
}
mobileCheck()
let isIOS
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
	isIOS = true
} else {
	isIOS = false
}

// var buttonsText = []

const buttonContent = {
	turnlock10: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>FULL HEIGHT</span>  <span>TURNSTILE</span></span>`,
		subTitle: `Turnlock 100`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\nPrevention`,
			`BE Secure`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP`,
			`beSecure`,
			`emergencyE`,
			`finishO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Standard Operation</span>`,

				content: [
					`Credential or biometric is presented`,
					`Valid credential turns LED green,\nunlocks turnstile and provides tone/voice`,
					`Turnstile rotates 120\u00B0, relocks, and sends a door closure signal,\nlogging the user into the space  `,
					`An authorized user can exit after the authorized user has entered`,
					`Exiting can also be set up as free out, requiring no credentials`,
					`Turnstile does not allow tailgating as it only rotates 120\u00B0 then relocks`,
				],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'piggybackingP'>Piggybacking Prevention</span>`,
				content: [
					`Piggybacking is an attempt to enter in same compartment`,
					`Credential or biometric is presented`,
					`Valid credential turns LED green, unlocks turnstile and provides audible tone/voice`,
					`Door rotates about 30\u00B0, then stops as...`,
					`BE Secure Overhead Sensor System detects two people`,
					`Turnstile remains locked, forcing both people\nto exit the compartment backwards`,
					`With optional BE Secure Overhead Sensor System, there is never a breach.\nUnauthorized user always exits to the unsecured side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'emergencyE'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile unlocks outbound\nallowing egress only`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [],
				paint: 3,
				delay: [3],
			},
			beSecure: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'beSecure'>Finish Options</span>`,
				content: [],
				inputButtonGrid: [
					`Authorized\nEntry`,
					`Walk Away\nDetection`,
					`Piggybacking`,
				],
				inputButtonId: [`authorizedE`, `walkA`, `piggyBBS`],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},
		// src: buttonsText[1],
	},
	turnlock15: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>FULL HEIGHT</span> <span>TURNSTILE</span></span>`,
		subTitle: `Turnlock 150`,
		content: [
			`Deter unauthorized entry `,
			`Prevent unauthorized entry with optional\nBE Secure Overhead Sensor System`,
			`2-way traffic, one direction at a time`,
			`High capacity - 200 people in 10 minutes (in one direction)`,
			`Integrates with any ACS or multi-factor schema`,
		],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Operation With\nMetal Detector`,

			`Piggybacking\nPrevention`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`operationW`,

			`piggybackingP`,
			`emergencyE`,
			`finishO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Standard Operation</span>`,

				content: [
					`Credential or biometric is presented`,
					`Valid credential turns LED green,\nunlocks turnstile and provides tone/voice`,
					`Turnstile rotates 120\u00B0, relocks, and sends a door closure signal,\nlogging the user into the space  `,
					`An authorized user can exit after the authorized user has entered`,
					`Exiting can also be set up as free out, requiring no credentials`,
					`Turnstile does not allow tailgating as it only rotates 120\u00B0 then relocks`,
				],
			},
			operationW: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Operation with Metal Detector</span>`,

				content: [
					`Credential or biometric is presented`,
					`Valid credential turns LED green, unlocks turnstile and provides audible signal (tone/voice)`,
					`User walks through metal detector`,
					`If no metal is detected, turnstile unlocks, rotates 120\u00B0, then stops and relocks`,
					`If metal is detected, turnstile remains locked and alarm sounds`,
					`User must exit the turnstile backwards to divest metal`,
					`Configuration can be provided with a metal detector for inbound and outbound traffic flow`,
				],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'piggybackingP'>Piggybacking Prevention</span>`,
				content: [
					`Piggybacking is an attempt to enter in same compartment\n(requires collusion or force)`,
					`Credential or biometric is presented`,
					`Valid credential turns LED green, unlocks turnstile and provides audible tone/voice`,
					`Door rotates about 30\u00B0, then stops as...`,
					`BE Secure Overhead Sensor System detects two people`,
					`Turnstile remains locked, forcing both people\nto exit the compartment backwards`,
					`With optional BE Secure Overhead Sensor System, there is never a breach.\nUnauthorized user always exits to the unsecured side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'emergencyE'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile unlocks\noutbound allowing egress only`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},
	},
	trilock60: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>WAIST HIGH</span>  <span>TURNSTILES</span></span>`,
		subTitle: `Trilock 60`,
		content: [
			`Integrates with a randomizer program and button `,
			`Installed back-to-back for space saving`,
			`Turnstile arms unlock and allow for one-way traffic (outbound)`,
			`Turnstile arms relock and await next user`,
		],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
		],
		inputButtonId: [`standardO`, `emergencyE`, `finishO`],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Standard Operation</span>`,
				content: [
					`User presses randomizer button`,
					`LED arrows direct user to the left or right`,
					`Depending on lane configuration, one option sends user directly to exit; the other option sends user to secondary screening area`,
					`Trilock arms unlock on the side to which user is directed`,
					`User pushes arm to pass through`,
					`Trilock relocks and waits for next user`,
				],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'emergencyE'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile unlocks outbound allowing egress only`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},
	},
	circlelockSo: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>INTERLOCKING</span> <span>SECURITY PORTAL</span></span>`,
		subTitle: `Circlelock Solo`,
		content: [
			`Prevent unauthorized entry`,
			`2-way traffic, one direction at a time`,
			`Low capacity - 60 people in 10 minutes`,
			`Integrates with any ACS or multi-factor schema`,
			`Risk Score - 0.8%, Efficiency Score - 99.2%`,
			1,
		],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\n Prevention 1`,
			`Piggybacking\n Prevention 2`,
			`StereoVision`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP1`,
			`piggybackingP2`,
			`stereoV`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,

				content: [
					`Credential or push button is presented`,
					`Valid credential turns LEDs green on the vertical entry post and internal\nmidpost, opens outer door and provides audible signal. Opposite side LED\nturns red until the user exits the door, and the outer door closes`,
					`StereoVision takes sampling 1`,
					`Door starts to close. Just prior to closure, StereoVision takes sampling 2`,
					`An optional, internal biometric device is activated upon door closure.\nThis validates user and prevents substitution`,
					`Interior door opens, then closes`,
				],
				delay: [1, 5, 17, 21, 26, 31],
			},
			piggybackingP1: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 1</span>`,
				content: [
					`Piggybacking is an attempt for two people to enter`,
					`Credential or push button is presented`,
					`Valid credential turns LEDs green on the vertical entry post and internal\nmidpost, opens outer door and provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`StereoVision takes sampling 1`,
					`StereoVision detects two people`,
					`Door remains open, and voice command prompts both people\nto exit. Turns LEDs red on the vertical entry post and internal midpost,\nand provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`After exiting, outer door closes`,
					`Never a breach. Unauthorized user always exits to the unsecure side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
				delay: [2, 5, 10, 21, 25, 28, 41, 45],
			},
			piggybackingP2: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 2</span>`,
				content: [
					`Piggybacking is an attempt for two people to enter`,
					`Credential or push button is presented`,
					`Valid credential turns LEDs green on the vertical entry post and internal\nmidpost, opens outer door and provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`StereoVision takes sampling 1. Door closes, StereoVision takes sampling 2`,
					`StereoVision detects two people`,
					`Door re-opens, and voice command prompts both people to exit.\nTurns LEDs red on the vertical entry post and internal midpost,\nand provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`After exiting, outer door closes`,
					`Never a breach. Unauthorized user always exits to the unsecure side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
			},
			stereoV: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				inputButtonGrid: [
					`One Person`,
					`Low Object`,
					`Multiple Persons`,
					`Sensor Blinding`,
				],
				inputButtonId: [`oneP`, `lowO`, `multipleP`, `sensorB`],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, outer door opens`,
					`Inner door typically remains closed and locked`,
					`No entrapment`,
					`No open door`,
					`Inner door can be programmed to open also`,
					`A side swing door is typically required to meet code`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [],
				paint: 3,
				delay: [2],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [
					`Door panel glass is \u00BC" curved clear tempered`,
					`Wall panel glass is \u00BC" curved clear tempered `,
					`All glass can be enhanced with vandal resistant or bullet resistant glass film`,
					`All glass can be replaced by BR level 1 laminated glass`,
				],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},

		// src: buttonsText[1],
	},
	circlelockCombi: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>INTERLOCKING</span> <span>SECURITY PORTAL</span></span>`,
		subTitle: `Circlelock Solo`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\n Prevention 1`,
			`Piggybacking\n Prevention 2`,
			`StereoVision`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP1`,
			`piggybackingP2`,
			`stereoV`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,

				content: [
					`Credential or push button is presented`,
					`Valid credential turns LEDs green on the vertical entry post and internal\nmidpost, opens outer door and provides audible signal. Opposite side LED\nturns red until the user exits the door, and the outer door closes`,
					`StereoVision takes sampling 1`,
					`Door starts to close. Just prior to closure, StereoVision takes sampling 2`,
					`An optional, internal biometric device is activated upon door closure.\nThis validates user and prevents substitution`,
					`Interior door opens, then closes`,
				],
				delay: [1, 5, 17, 21, 26, 31],
			},
			piggybackingP1: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 1</span>`,
				content: [
					`Piggybacking is an attempt for two people to enter`,
					`Credential or push button is presented`,
					`Valid credential turns LEDs green on the vertical entry post and internal\nmidpost, opens outer door and provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`StereoVision takes sampling 1`,
					`StereoVision detects two people`,
					`Door remains open, and voice command prompts both people\nto exit. Turns LEDs red on the vertical entry post and internal midpost,\nand provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`After exiting, outer door closes`,
					`Never a breach. Unauthorized user always exits to the unsecure side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
				delay: [2, 5, 10, 21, 25, 28, 41, 45],
			},
			piggybackingP2: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 2</span>`,
				content: [
					`Piggybacking is an attempt for two people to enter`,
					`Credential or push button is presented`,
					`Valid credential turns LEDs green on the vertical entry post and internal\nmidpost, opens outer door and provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`StereoVision takes sampling 1. Door closes, StereoVision takes sampling 2`,
					`StereoVision detects two people`,
					`Door re-opens, and voice command prompts both people to exit.\nTurns LEDs red on the vertical entry post and internal midpost,\nand provides audible signal. Opposite side LED\nturns red until the users exit the door, and the outer door closes`,
					`After exiting, outer door closes`,
					`Never a breach. Unauthorized user always exits to the unsecure side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention). Always in compliance`,
				],
				delay: [2, 7, 11, 21, 30, 35, 49, 53],
			},
			stereoV: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				inputButtonGrid: [
					`One Person`,
					`Low Object`,
					`Multiple Persons`,
					`Sensor Blinding`,
				],
				inputButtonId: [`oneP`, `lowO`, `multipleP`, `sensorB`],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, outer door opens`,
					`Inner door typically remains closed and locked`,
					`No entrapment`,
					`No open door`,
					`Inner door can be programmed to open also`,
					`A side swing door is typically required to meet code`,
				],
				delay: [1, 5, 9, 11, 13, 15],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				paint: 3,
				delay: [2],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [
					`Door panel glass is \u00BC" curved clear tempered`,
					`Wall panel glass is \u00BC" curved clear tempered `,
					`All glass can be enhanced with vandal resistant or bullet resistant glass film`,
					`All glass can be replaced by BR level 1 laminated glass`,
				],
				delay: [1, 6, 11, 16],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},

		// src: buttonsText[1],
	},
	tourlock18: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>SECURITY</span> <span>REVOLVING DOOR</span></span>`,
		subTitle: `Tourlock 180`,
		content: [
			`Prevent unauthorized entry`,
			`In and out simultaneous 2-way traffic`,
			`High throughput - 10 min. peak of 150 people, each way`,
			`Integrates with any ACS or multi-factor schema`,
			`Risk Score - 2.7%, Efficiency Score - 97.3%`,
			1,
		],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\n Prevention`,
			`Tailgating\nPrevention 1`,
			`Tailgating\nPrevention 2`,
			`StereoVision`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP`,
			`tailgatingP1`,
			`tailgatingP2`,
			`stereoV`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,

				content: [
					`Credential or biometric is presented`,
					`Valid credential turns inbound LEDs green\nand provides tone/voice on authorized user side only`,

					`Door does not start rotating until the authorized user\nenters and is detected`,
					`Door rotates 180\u00B0, then stops and relocks `,
					`Authorized users can exit while authorized users enter`,
					`Exiting can be free out`,
				],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention</span>`,
				content: [
					`Piggybacking is an attempt to enter in same compartment\n as an authorized user`,
					`Credential or biometric is presented`,
					`Valid credential turns inbound LEDs green\nand provides tone/voice on authorized user side only`,
					`Door does not start rotating until the authorized user enters and is detected `,
					`Door rotates 45\u00B0, StereoVision samples for one person only\n(door continues to rotate during StereoVision scanning)`,
					`Door rotates another 30\u00B0; StereoVision re-samples for one person only\n(door continues to rotate during StereoVision scanning)`,
					`If StereoVision detects authorized person alone, door rotates to 180\u00B0`,
				],
				content2: [
					`If StereoVision detects unauthorized person, door stops at 90\u00B0`,
					`LEDs turn red and provide audible message\non the unauthorized user side of the door only`,
					`Door reverses 45\u00B0, forcing both people to exit the compartment`,
					`Never a breach. Unauthorized user always exits to the unsecure side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention).\nAlways in compliance`,
				],
			},
			tailgatingP1: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Tailgating Prevention 1</span>`,

				content: [
					`An attempt to enter an empty compartment\nas an authorized user is entering`,
					`Credential or biometric is presented`,
					`Valid credential turns inbound LEDs green,\nprovides tone/voice on authorized user side only`,
					`Door does not start rotating until the authorized user enters\n and is detected`,
					`Overhead sensor detects the second person after door\nhas rotated 90\u00B0, stops and locks the door; turns LEDs red;\nprovides audible signal within the violating compartment only`,
				],
				content2: [
					`Door continues to rotate another 45\u00B0, then stops and relocks`,
					`Authorized user has successfully entered.\nUnauthorized user prevented entry`,
					`When compartment is empty, door rotates forward an additional\n45\u00B0, repositioned to the "x" rest or home position`,
					`Never a breach. Unauthorized user always exits to the unsecure side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention).\nAlways in compliance`,
				],
			},
			tailgatingP2: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Tailgating Prevention 2</span>`,

				content: [
					`An unauthorized user attempting to enter as an\nauthorized user is exiting from the secured side`,
					`Free exiting; or credential or biometric is presented`,
					`Valid credential turns outbound LEDs green and provides\naudible tone/voice on the authorized user side of the door only`,
					`Door does not start rotating until the authorized user enters\n and is detected`,
					`Overhead sensor detects the unauthorized person after\ndoor has rotated 45\u00B0`,
				],
				content2: [
					`Unauthorized user prevented entry; authorized user\nprevented from exiting. Authorized user and the unauthorized\nuser must exit the door. Once compartments are cleared ...`,
					`Door rotates 45\u00B0, then stops and relocks `,
					`Authorized user re-attempts to exit`,
					`Never a breach. Unauthorized user always exits to the unsecure side.\nEliminate DHO (door held open) and DFO (door forced open) alarms.\nAutomated resolution of issues (no human intervention).\nAlways in compliance`,
				],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, door panels unlock`,
					`Door panels can be pushed and folded, allowing egress`,
					`Meets building codes for egress compliance`,
					`After alarm situation, doors must be manually reset`,
					`Building codes require a side door (lockable/alarmable)\nnext to a revolving door`,
				],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [
					`Door panel glass is \u00BC" clear tempered`,
					`Wall panel glass is \u00BC" curved clear tempered `,
					`All glass can be enhanced with vandal resistant or bullet resistant glass film`,
					`All glass can be replaced by BR level 1 laminated glass`,
				],
			},
			stereoV: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				inputButtonGrid: [
					`One Person`,
					`Low Object`,
					`Multiple Persons`,
					`Sensor Blinding`,
				],
				inputButtonId: [`oneP`, `lowO`, `multipleP`, `sensorB`],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				paint: 3,
				delay: [3],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},

		// src: buttonsText[1],
	},
	lifelineSw: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>OPTICAL</span> <span>TURNSTILE</span></span>`,
		subTitle: `Lifeline Speedlane Swing`,
		content: [
			`Detect unauthorized entry`,
			`2-way traffic, one direction at a time`,
			`High capacity - 300 people in 10 minutes in one direction`,
			`Integrates with any ACS or multi-factor schema`,
		],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Tailgating\nPrevention`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`tailgatingP`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,
				content: [
					`Credential or biometric is presented`,
					`Valid credential turns LEDs green,\nand provides audible signal (tone or voice)`,
					`Volumetric sensor system detects authorized user`,
					`Turnstile glass panels swing in, then close`,
					`An authorized user can exit after the authorized user has entered`,
					`Turnstile glass panels swing out, then close`,
					`Exiting can also be set up as free out, requiring no credentials`,
				],
				delay: [2, 5, 11, 15, 19, 24, 30],
			},
			tailgatingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Tailgating Prevention</span>`,
				content: [
					`Tailgating is an attempt to follow an authorized user`,
					`Credential or biometric is presented`,
					`Valid credential turns inbound LEDs green, unlocks turnstile\nand provides audible tone/voice`,
					`Volumetric sensor system detects authorized user`,
					`Turnstile glass panels swing in`,
					`Volumetric sensor system detects unauthorized person`,
					`Unauthorized user detected, sounding alarm`,
					`Glass panels close, provided safety sensor system not engaged`,
					`No DHO or DFO. Automated resolution. Compliance maintained`,
				],
				delay: [2, 6, 10, 15, 18, 22, 26, 31, 37],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile panels unlock or swing out`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				paint: [2],
				delay: [1],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [
					`Glass is \u00BC" flat clear tempered`,
					`Glass can be cabinet height or tall`,
					`All glass can be enhanced with vandal resistant glass film`,
				],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},

		// src: buttonsText[1],
	},
}

const rotationContent = {
	turnlock10:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock100/Turnlock100.spin?fullscreen=false',
	turnlock15:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock150/Turnlock150.spin?fullscreen=false',
	tourlock18:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	tourlock182:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	lifelineSw:
		'https://rotation.marketscale.com/Companies/BoonEdam/LifeLineSwing/LifeLineSwing.spin?fullscreen=false',
	circlelockSo:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	circlelockSo2:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	trilock60:
		'https://rotation.marketscale.com/Companies/BoonEdam/TriLock60/TriLock60.spin?fullscreen=false',
}
// Display fullscreen button
if (!isMobile) {
	fullscreen_button.style.display = 'none'
} else if (isIOS) {
	fullscreen_button.style.display = 'none'
}

// else {
// if (isIOS) {
// 	fullscreen_button.style.display = 'none'
// }
// }

// if (isMac) {
// 	alertdiv.style.display = 'flex'
// }

// Set which videos are going to swap
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay, props) {
	if (videoToPause) {
		videoToPause.pause()
	}

	if (props === 'back') {
		console.log('backarandas')
		videoToVanish.classList.add('short-vanish')
		videoToVanish.classList.remove('show')
	} else {
		videoToVanish.style.opacity = 0
	}
	videoToPlay.style.opacity = 1
	videoToPlay.play()
}

// loop.currentTime = 60
// Vanish/show the main buttons and svgs
function HideShowMainButtons() {
	mainButtons.classList.toggle('show')
	mainButtons.classList.toggle('disabled')
	mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
	showCont.classList.remove('hidden')
	showCont.classList.toggle('short-vanish')
	showCont.classList.toggle('show')
}

// Set animations for the buttons
function animations() {
	console.trace()
	if (pCont) {
		paragraph.style.animation = 'fadein 0.5s ease-in-out forwards'

		const elementContainers = document.querySelectorAll('.elementContainer')

		let counter = 0.3
		// console.log(delay)

		if (delay) {
			console.log(delay)
			let inputArray = []
			let bool = false
			subVideo1.addEventListener('timeupdate', function () {
				console.log(subVideo1.currentTime)
				//currentTime use second, if you want min *60

				delay.forEach((element, i) => {
					if (Math.floor(subVideo1.currentTime) === element) {
						if (inputArray.length === 0) {
							if (elementContainers) {
								elementContainers[i].style.animation =
									'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
							}

							inputArray.push(Math.floor(subVideo1.currentTime))
							console.log(inputArray)
						} else {
							if (
								element ===
								inputArray.find((num) => {
									return num === element
								})
							) {
							} else {
								if (pageIndex === 'piggybackingP') {
									if (Math.floor(subVideo1.currentTime) === 36) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									}
								} else if (pageIndex === 'tailgatingP1') {
									if (Math.floor(subVideo1.currentTime) === 35) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									}
								} else if (pageIndex === 'tailgatingP2') {
									if (Math.floor(subVideo1.currentTime) === 30) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									}
								} else {
									elementContainers[i].style.animation =
										'fadein 0.5s ease-in-out forwards'
									inputArray.push(Math.floor(subVideo1.currentTime))
								}

								console.log(inputArray)
							}
						}
					}
				})

				if (inputArray.length === delay.length && !bool) {
					let removeCount = inputArray.length
					let elementContainersArray = Array.from(elementContainers)
					// console.log(elementContainersArray)
					elementContainersArray.splice(0, removeCount)

					elementContainersArray.forEach((element, i) => {
						element.style.animation =
							'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
						element.style.animationDelay = `${counter}s`
						counter += 0.2
					})
					bool = true
				}
			})
		} else {
			elementContainers.forEach((element, i) => {
				element.style.animation =
					'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
				element.style.animationDelay = `${counter}s`
				counter += 0.1

				setTimeout(() => {
					element.style.animation = 'fadein 0.5s ease-in-out forwards'
				}, 2000)
			})
		}

		buttonGridContainer.style.animation =
			'slideFromBottom 0.5s ease-out forwards'
		buttonGridContainer.style.animationDelay = `${counter}s`
		backButtonContainer.style.animation = 'slideFromTop 0.5s ease-out forwards'
		brandIcon.style.animation = 'show 0.5s ease-out forwards'
		brandIcon.style.animationDelay = `${counter}s`
		backButtonContainer.style.animationDelay = `${counter}s`
	}

	if (boxVideo) {
		boxVideo.forEach((e, i) => {
			boxVideo[i].style.animation =
				'growVideo 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards '
			boxVideo[i].style.animationDelay = '1.8s'
		})
	}
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
	if (source1) {
		video1 = document.createElement('video')
		video1.src = source1
		video1.muted = true
		video1.setAttribute('playsinline', 'playsinline')
		video1.controls = false
		video1.autoplay = true
		video1.classList.add('video')
		video1.style.opacity = 0
		video1.pause()

		video1Container.appendChild(video1)
	}

	if (source2) {
		video2 = document.createElement('video')
		video2.src = source2
		video2.loop = true
		video2.muted = true
		video2.setAttribute('playsinline', 'playsinline')

		video2.controls = false
		video2.autoplay = true
		video2.classList.add('video')
		video2.style.opacity = 0
		video2.pause()

		video2Container.appendChild(video2)
	}
	if (source3) {
		video3 = document.createElement('video')
		video3.src = source3
		video3.muted = true
		video3.autoplay = true
		video3.setAttribute('playsinline', 'playsinline')
		video3.controls = false
		video3.classList.add('video')
		video3.style.opacity = 0
		video3.pause()

		video3Container.appendChild(video3)
	}
}

function createSubVideos(source1, source2, source3) {
	if (source1) {
		subVideo1 = document.createElement('video')
		subVideo1.src = source1
		subVideo1.muted = true
		subVideo1.setAttribute('playsinline', 'playsinline')
		subVideo1.controls = false
		subVideo1.autoplay = true
		subVideo1.classList.add('subVideo')
		subVideo1.style.opacity = 0
		subVideo1.pause()
		// loopContainer.appendChild(subVideo1)
		subVideo1Container.appendChild(subVideo1)
	}

	if (source2) {
		subVideo2 = document.createElement('video')
		subVideo2.src = source2
		if (nextButton === 'emergencyE') {
			subVideo2.loop = true
		}
		// subVideo2.loop = true
		subVideo2.muted = true
		subVideo2.setAttribute('playsinline', 'playsinline')
		subVideo2.controls = false
		subVideo2.autoplay = true
		subVideo2.classList.add('subVideo')
		subVideo2.style.opacity = 0
		subVideo2.pause()
		// loopContainer.appendChild(subVideo2)
		subVideo2Container.appendChild(subVideo2)
	}
	if (source3) {
		subVideo3 = document.createElement('video')
		subVideo3.src = source3
		subVideo3.muted = true
		subVideo3.autoplay = true
		subVideo3.setAttribute('playsinline', 'playsinline')
		subVideo3.controls = false
		subVideo3.classList.add('subVideo')
		subVideo3.style.opacity = 0
		subVideo3.pause()
		// loopContainer.appendChild(subVideo3)
		subVideo3Container.appendChild(subVideo3)
	}
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph

function setMediaElementSource(index, route) {
	console.log(index)
	console.log(route)
	console.trace()
	console.log(documentRoutes[route])
	const selectedRoute = documentRoutes[route]
	const fileName = selectedRoute.imagesVideos[index]
	const extension = fileName.split('.').pop()
	const filePath = `../assets/${route}/documents/imagesVideos/${fileName}`

	if (extension === 'mp4') {
		const videoElement = document.createElement('video')
		videoElement.classList.add('videoShowed')
		videoElement.src = filePath
		videoElement.poster = ''
		videoElement.controls = true
		return videoElement
	} else {
		const imageElement = document.createElement('img')
		imageElement.classList.add('imageShowed')
		imageElement.src = filePath
		imageElement.poster = ''
		imageElement.controls = false
		return imageElement
	}
}

function createContent(obj) {
	// console.log('nextButton:' + nextButton)
	// console.log('currentButton:' + currentButton)
	// console.log('pageIndex:' + pageIndex)
	console.trace()

	delay = ''
	if (obj) {
		textLeft = obj.textLeft
		textTop = obj.textTop
		textRight = obj.textRight
		textBottom = obj.textBottom
		labelTitle = obj.title
		pContent = obj.content
		pContent2 = obj.content2
		subTitle = obj.subTitle
		inputButtonGrid = obj.inputButtonGrid
		inputButtonId = obj.inputButtonId
		delayInput = obj.delay
		paint = obj.paint
	}

	const centerContainerMade = document.createElement('div')
	centerContainerMade.classList.add('centerContainer')
	centerContainerMade.setAttribute('id', 'centerContainer_text')
	const textContainerMade = document.createElement('div')
	textContainerMade.classList.add('textContainer')
	textContainerMade.style.width = containVideoWidth + 'px'
	textContainerMade.style.height = containVideoHeight + 'px'

	firstPage = document.createElement('div')
	firstPage.classList.add('firstPage')

	firstPage.style.right = textRight
	firstPage.style.top = textTop
	firstPage.style.left = textLeft
	firstPage.style.bottom = textBottom

	textContent = document.createElement('div')
	textContent.classList.add('text')
	buttonGridContainer = document.createElement('div')
	buttonGridContainer.classList.add('buttonGridContainer')
	buttonGrid = document.createElement('div')
	buttonGrid.classList.add('buttonGrid')

	if (inputButtonGrid) {
		if (inputButtonGrid.length === 5) {
			buttonGrid.style.gridTemplateColumns = 'repeat(5, 1fr)'
		}
		inputButtonGrid.forEach((e, i) => {
			buttonShort[i] = inputButtonId[i]
			const subButton = document.createElement('button')
			subButton.classList.add('pageButton')
			subButton.style.width = `calc(40px + (145 - 40) * ((${
				containVideoWidth + 'px'
			} - 320px) / (1440 - 320)))`
			subButton.textContent = e
			subButton.style.fontSize = buttonFontvar
			buttonGrid.appendChild(subButton)
			buttonDimensions = subButton

			if (nextButton === 'beSecure' || nextButton === 'stereoV') {
				subButton.addEventListener('click', function () {
					HideShowCont()
					buttonGrid.children.forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					cornerIcons.children.forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					backButton.style.pointerEvents = 'none'
					setTimeout(() => {
						showCont.innerHTML = ''
					}, 500)
					pageIndex = currentButton
					currentButton = nextButton
					nextButton = buttonShort[i]
					console.log('nextButton:' + nextButton)
					console.log('currentButton:' + currentButton)
					console.log('pageIndex:' + pageIndex)
					specificVideo = document.createElement('video')
					specificVideo.src = `assets/${pageIndex}/${currentButton}/${currentButton}/${nextButton}1.mp4`
					specificVideo.muted = true
					specificVideo.setAttribute('playsinline', 'playsinline')
					specificVideo.controls = false
					specificVideo.autoplay = true
					specificVideo.classList.add('video')
					specificVideo.style.opacity = 0
					specificVideo.pause()
					specificVideoContainer.appendChild(specificVideo)

					let videosCheck = false
					check1()
					function check1() {
						clearcheck = setInterval(repeatcheck, 600)
						function repeatcheck() {
							if (specificVideo.readyState === 4) {
								videosCheck = true
							}
							setTimeout(() => {
								if (!videosCheck) {
									loader.style.zIndex = '200'
									loader.classList.add('show')
								}
							}, 3000)
							if (videosCheck) {
								loader.classList.remove('show')
								loader.classList.add('short-vanish')
								loader.style.zIndex = '-200'
								clearInterval(clearcheck)

								inputButtonGrid = ''
								createContent()

								specificVideo.classList.add('show')

								specificVideo.play()
								animations()
								HideShowCont()
							}
						}
					}
				})
			} else {
				subButton.addEventListener('click', function () {
					HideShowCont()
					buttonGrid.children.forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					cornerIcons.children.forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					backButton.style.pointerEvents = 'none'

					setTimeout(() => {
						showCont.innerHTML = ''
					}, 500)

					pageIndex = currentButton
					currentButton = nextButton
					nextButton = buttonShort[i]
					console.log('nextButton:' + nextButton)
					console.log('currentButton:' + currentButton)
					console.log('pageIndex:' + pageIndex)
					// 	// Con esto veo que boton es /////////////////////////////////

					createSubVideos(
						`assets/${currentButton}/${nextButton}/${nextButton}1.mp4`,
						`assets/${currentButton}/${nextButton}/${nextButton}2.mp4`,
						`assets/${currentButton}/${nextButton}/${nextButton}3.mp4`
					)
					let videosCheck = false
					check1()
					function check1() {
						clearcheck = setInterval(repeatcheck, 600)

						function repeatcheck() {
							if (
								subVideo1.readyState === 4 &&
								subVideo2.readyState === 4 &&
								subVideo3.readyState === 4
							) {
								videosCheck = true
							} else {
								if (subVideo1.readyState !== 4) {
									subVideo1.load()
								}
								if (subVideo2.readyState !== 4) {
									subVideo2.load()
								}
								if (subVideo3.readyState !== 4) {
									subVideo3.load()
								}
							}
							setTimeout(() => {
								if (!videosCheck) {
									loader.style.zIndex = '200'
									loader.classList.add('show')
								}
							}, 3000)
							if (videosCheck) {
								loader.classList.remove('show')
								loader.classList.add('short-vanish')
								loader.style.zIndex = '-200'
								clearInterval(clearcheck)

								createContent(
									buttonContent[currentButton].boxInfo[nextButton],
									currentButton
								)

								// textContent.style.height = '100%'
								video2.classList.remove('show')
								video2.classList.add('short-vanish')

								subVideo1.style.opacity = 1

								subVideo1.play()
								HideShowCont()
								animations()
								subVideo1.addEventListener('ended', () => {
									console.log('subVideo1 ending')
									InterpolateVideo(video3, subVideo1, subVideo2)
								})
							}
						}
					}
				})
			}
		})
	}

	if (pContent) {
		pCont = document.createElement('div')
		pCont.classList.add('pCont')

		list = document.createElement('ul')

		// titleH2 = document.createElement('span')
		// titleH2.classList.add('title1')
		// titleH2.style.fontSize = globalBigTitleFontvar
		// titleH2.innerHTML = labelTitle
		// greenLine = document.createElement('hr')
		paragraph = document.createElement('p')
		// titleH2.appendChild(greenLine)

		paragraph.textContent = pContent
		// titleH2.style.fontSize = globalFontvar
		paragraph.style.fontSize = globalFontvar

		if (subTitle) {
			createdSubTitle = document.createElement('span')
			createdSubTitle.classList.add('createdSubtitle')
			createdSubTitle.textContent = subTitle
			createdSubTitle.style.fontWeight = 'bold'
			createdSubTitle.style.fontSize = globalMediumTitleFontvar
			// titleH2.appendChild(createdSubTitle)
		}

		createBackButton()
		if (Array.isArray(pContent)) {
			if (delayInput) {
				delay = delayInput
			}

			function toggleEventListener(element, event, handler, add) {
				if (add) {
					element.addEventListener(event, handler)
				} else {
					element.removeEventListener(event, handler)
				}
			}
			let imageIndex = 0
			function createInfoContainer(title, icon) {
				const infoContainer = document.createElement('div')
				infoContainer.classList.add('infoContainer')

				const titleElement = document.createElement('h3')
				titleElement.classList.add('infoContainerTitle')
				titleElement.textContent = title

				const img = document.createElement('img')
				img.classList.add('finishImg')
				img.src = `assets/icons/${icon}`

				img.addEventListener('click', () => {
					const textContainerImageModal = document.querySelector(
						'.textContainerImageModal'
					)
					textContainerImageModal.style.width = containVideoWidth + 'px'
					textContainerImageModal.style.height = containVideoHeight + 'px'

					const imageShowedHolder = document.querySelector('.imageShowedHolder')

					let mediaElement = null

					const leftArrow = document.querySelector('.leftArrow')
					const rightArrow = document.querySelector('.rightArrow')
					const imageX = document.querySelector('.imageX')

					toggleEventListener(leftArrow, 'click', leftArrow.clickHandler, false)
					toggleEventListener(
						rightArrow,
						'click',
						rightArrow.clickHandler,
						false
					)
					toggleEventListener(imageX, 'click', imageX.clickHandler, false)

					leftArrow.clickHandler = () => {
						imageIndex =
							(imageIndex -
								1 +
								documentRoutes[currentButton].imagesVideos.length) %
							documentRoutes[currentButton].imagesVideos.length

						mediaElement = setMediaElementSource(imageIndex, currentButton)
						imageShowedHolder.innerHTML = ''
						imageShowedHolder.appendChild(mediaElement)
					}
					toggleEventListener(leftArrow, 'click', leftArrow.clickHandler, true)
					rightArrow.clickHandler = () => {
						imageIndex =
							(imageIndex + 1) %
							documentRoutes[currentButton].imagesVideos.length
						mediaElement = setMediaElementSource(imageIndex, currentButton)
						imageShowedHolder.innerHTML = ''
						imageShowedHolder.appendChild(mediaElement)
					}
					toggleEventListener(
						rightArrow,
						'click',
						rightArrow.clickHandler,
						true
					)

					imageX.clickHandler = () => {
						textContainerImageModal.style.width = '0px'
						textContainerImageModal.style.height = '0px'
					}
					toggleEventListener(imageX, 'click', imageX.clickHandler, true)

					mediaElement = setMediaElementSource(imageIndex, currentButton)
					if (!imageShowedHolder.hasChildNodes()) {
						imageShowedHolder.appendChild(mediaElement)
					}
				})

				infoContainer.appendChild(titleElement)
				infoContainer.appendChild(img)

				return infoContainer
			}

			if (nextButton === 'documents') {
				elementContainer = document.createElement('span')
				firstPage.style.justifyContent = 'flex-start'
				elementContainer.classList.add(
					'elementContainer',
					'imageContainer',
					'documentsContainer'
				)

				const documentTypes = [
					{ title: 'Photo/Video', icon: 'documents1.png' },
					{ title: 'Specifications', icon: 'documents2.png' },
					{ title: 'Drawings', icon: 'documents3.png' },
					{ title: 'Miscellaneous', icon: 'documents4.png' },
				]

				documentTypes.forEach(({ title, icon }) => {
					const infoContainer = createInfoContainer(title, icon)
					elementContainer.appendChild(infoContainer)
				})

				paragraph.appendChild(elementContainer)
			} else if (nextButton === 'finishO') {
				elementContainer = document.createElement('span')
				elementContainer.classList.add(
					'elementContainer',
					'imageContainer',
					'finishContainer'
				)

				subVideoFinish1.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${1}.mp4`
				subVideoFinish2.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${2}.mp4`
				subVideoFinish3.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${3}.mp4`

				for (let i = 0; i < paint; i++) {
					let infoContainer = document.createElement('div')
					infoContainer.classList.add('infoContainer')

					let image = document.createElement('img')
					image.classList.add('finishImg')
					image.src = `assets/${currentButton}/${nextButton}/${nextButton}${
						i + 1
					}.png`
					if (isMobile) {
						image.style.width = '6em'
					} else {
						image.style.width = '6em'
					}
					image.addEventListener('click', () => {
						console.log('clickaste perroide')
						if (i + 1 === 1) {
							subVideoFinish1.style.opacity = 1
							subVideoFinish2.style.opacity = 0
							subVideoFinish3.style.opacity = 0
							subVideo2.style.opacity = 0
						}
						if (i + 1 === 2) {
							subVideoFinish1.style.opacity = 0
							subVideoFinish2.style.opacity = 1
							subVideoFinish3.style.opacity = 0
							subVideo2.style.opacity = 0
						}
						if (i + 1 === 3) {
							subVideoFinish1.style.opacity = 0
							subVideoFinish2.style.opacity = 0
							subVideoFinish3.style.opacity = 1
							subVideo2.style.opacity = 0
						}
						subVideo2.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${
							i + 1
						}.mp4`
						subVideo3.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${
							i + 1
						}.mp4`
					})

					console.log(subVideoFinish2)

					infoContainer.appendChild(image)
					elementContainer.appendChild(infoContainer)
					// console.log(pCont)
					// console.log(paragraph)
					// console.log(elementContainer)
					pCont.appendChild(paragraph)
					paragraph.appendChild(elementContainer)
				}

				paragraph.appendChild(elementContainer)
			} else {
				pContent.forEach((e) => {
					if (Number.isInteger(e)) {
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer', 'imageContainer')
						for (let i = 0; i < e; i++) {
							let image = document.createElement('img')

							if (
								nextButton === 'tourlock18' ||
								nextButton === 'tourlock182' ||
								nextButton === 'circlelockSo' ||
								nextButton === 'circlelockSo2'
							) {
								image.classList.add('tableImg')
								image.src = `assets/${currentButton}/${nextButton}/${nextButton}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '20em'
								} else {
									image.style.width = '24em'
								}
							} else {
								image.classList.add('finishImg')
								image.src = `assets/${currentButton}/${pageIndex}/${pageIndex}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '6em'
								} else {
									image.style.width = '6em'
								}
							}

							elementContainer.appendChild(image)
							paragraph.appendChild(elementContainer)
						}
					} else {
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer')
						elementContainer.setAttribute('id', 'pCont1')

						let icon = document.createElement('img')
						icon.src = 'assets/icons/bp.png'
						icon.style.width = '1.3em'

						let element = document.createElement('span')
						element.textContent = e
						element.style.fontSize = globalFontvar
						elementContainer.appendChild(icon)
						elementContainer.appendChild(element)
						paragraph.appendChild(elementContainer)
					}
				})
			}
		}

		if (pContent2) {
			if (Array.isArray(pContent2)) {
				if (delayInput) {
					delay = delayInput
				}
				console.log(nextButton)
				pContent2.forEach((e) => {
					if (Number.isInteger(e)) {
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer', 'imageContainer')
						for (let i = 0; i < e; i++) {
							let image = document.createElement('img')
							image.classList.add('extraImg')
							if (
								nextButton === 'tourlock18' ||
								nextButton === 'tourlock182' ||
								nextButton === 'circlelockSo' ||
								nextButton === 'circlelockSo2'
							) {
								image.src = `assets/${currentButton}/${nextButton}/${nextButton}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '20em'
								} else {
									image.style.width = '25em'
								}
							} else {
								image.src = `assets/${currentButton}/${pageIndex}/${pageIndex}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '8em'
								} else {
									image.style.width = '6em'
								}
							}

							elementContainer.appendChild(image)
							paragraph.appendChild(elementContainer)
						}
					} else {
						let elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer')
						elementContainer.setAttribute('id', 'pCont2')
						let icon = document.createElement('img')
						icon.src = 'assets/icons/bp.png'
						icon.style.width = '1.3em'

						let element = document.createElement('span')
						element.textContent = e
						element.style.fontSize = globalFontvar
						elementContainer.appendChild(icon)
						elementContainer.appendChild(element)
						paragraph.appendChild(elementContainer)
					}
				})
			}
		}
		// pCont.appendChild(titleH2)
		if (nextButton === 'documents' || nextButton === 'finishO') {
			pCont.appendChild(paragraph)
			textContent.appendChild(pCont)
		}
	}

	firstPage.appendChild(textContent)
	if (nextButton === 'beSecure' || nextButton === 'stereoV') {
		let gridTitle = document.createElement('h3')
		gridTitle.classList.add('gridTitle')

		if (nextButton === 'beSecure') {
			gridTitle.textContent = 'BE Secure escenarios'
		} else if (nextButton === 'stereoV') {
			gridTitle.textContent = 'StereoVision escenarios'
		}

		buttonGridContainer.style.flexDirection = 'column'
		buttonGridContainer.style.justifyContent = 'flex-end'
		buttonGridContainer.style.alignItems = 'flex-start'
		buttonGridContainer.appendChild(gridTitle)
	}
	buttonGridContainer.appendChild(buttonGrid)

	if (
		nextButton === 'turnlock10' ||
		nextButton === 'tourlock18' ||
		nextButton === 'lifelineSw' ||
		nextButton === 'circlelockSo' ||
		nextButton === 'circlelockCombi'
	) {
		cornerIcons = document.createElement('div')
		cornerIcons.classList.add('cornerIcons')

		documents = document.createElement('img')
		documents.classList.add('documents')
		documents.src = 'assets/icons/document.png'

		documents.addEventListener('click', function () {
			HideShowCont()
			buttonGrid.children.forEach((element) => {
				element.style.pointerEvents = 'none'
			})
			cornerIcons.children.forEach((element) => {
				element.style.pointerEvents = 'none'
			})
			setTimeout(() => {
				showCont.innerHTML = ''
			}, 500)

			currentButton = nextButton
			nextButton = 'documents'

			console.log('nextButton:' + nextButton)
			console.log('currentButton:' + currentButton)
			console.log('pageIndex:' + pageIndex)
			// 	// Con esto veo que boton es /////////////////////////////////
			createSubVideos(
				`assets/${currentButton}/${nextButton}/${nextButton}1.mp4`,
				`assets/${currentButton}/${nextButton}/${nextButton}2.mp4`,
				`assets/${currentButton}/${nextButton}/${nextButton}3.mp4`
			)
			let videosCheck = false
			check1()
			function check1() {
				clearcheck = setInterval(repeatcheck, 600)
				function repeatcheck() {
					if (
						subVideo1.readyState === 4 &&
						subVideo2.readyState === 4 &&
						subVideo3.readyState === 4
					) {
						videosCheck = true
					}
					setTimeout(() => {
						if (!videosCheck) {
							loader.style.zIndex = '200'
							loader.classList.add('show')
						}
					}, 3000)
					if (videosCheck) {
						loader.classList.remove('show')
						loader.classList.add('short-vanish')
						loader.style.zIndex = '-200'
						clearInterval(clearcheck)

						createContent(
							buttonContent[currentButton].boxInfo[nextButton],
							currentButton
						)
						// textContent.style.height = '100%'
						video2.classList.remove('show')
						video2.classList.add('short-vanish')
						subVideo1.style.opacity = 1
						setTimeout(() => {
							subVideo1.play()
							subVideo1.addEventListener('ended', () => {
								animations()
								InterpolateVideo(video3, subVideo1, subVideo2)
								HideShowCont()
							})
						}, 0)
					}
				}
			}
		})
		threesixty = document.createElement('img')
		threesixty.classList.add('threesixty')
		threesixty.src = 'assets/icons/threesixtyLogo.png'
		threesixty.addEventListener('click', () => {
			createRotation()
		})

		buttonGridContainer.appendChild(cornerIcons)
		cornerIcons.appendChild(documents)
		cornerIcons.appendChild(threesixty)
	}

	firstPage.appendChild(buttonGridContainer)

	showCont.appendChild(centerContainerMade)

	centerContainerMade.appendChild(textContainerMade)
	textContainerMade.appendChild(firstPage)
}
// asd
// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function setFontSizes() {
	const button = document.querySelectorAll('.button')

	const titulo = document.querySelector('.titulo')
	const mainBoxText = document.querySelector('.mainBoxText')

	globalFontvar = `calc(6px + (18 - 6) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	globalTitleFontvar = `calc(14px + (27 - 14) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalMediumTitleFontvar = `calc(7px + (35 - 7) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalBigTitleFontvar = `calc(8px + (35 - 8) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	buttonFontvar = `calc(4px + (15 - 4) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	// mainBoxText.style.fontSize = globalFontvar

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = globalFontvar
	}
	titulo.style.fontSize = globalTitleFontvar

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = globalFontvar
		// button[i].style.width = `calc(85px + (220 - 85) * ((${
		// 	containVideoWidth + 'px'
		// } - 320px) / (1440 - 320)))`
	}
}
function createRotation() {
	console.log(nextButton)
	console.log(pageIndex)
	// if (rotation) {
	// 	rotation.innerHTML = ''
	// }
	loader.classList.remove('short-vanish')
	loader.style.zIndex = '2'
	initial.style.zIndex = '1'
	initial.classList.remove('short-vanish')
	// initial.classList.add('show')

	HideShowCont()
	$('#product-reel')
		.reel('images', `./assets/${nextButton}/threesixty/${nextButton}_#.jpg`)
		.bind('loaded', function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'
			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		})

	rotation.classList.toggle('show')
	rotation.classList.toggle('hidden')
	createBackButton('rotationPage')
	window.addEventListener('resize', resizeRotation)

	setTimeout(() => {
		showCont.innerHTML = ''
	}, 300)
}

function resizeRotation() {
	const rotationBackButton = document.querySelector('#rotation_backButton')
	if (rotationBackButton) {
		rotationBackButton.remove()
	}
	ArreglarLineas()
	createBackButton('rotationPage')
}

function exitRotation() {
	ArreglarLineas()
	backButtonRotation.style.pointerEvents = 'none'
	rotation.classList.remove('show')
	rotation.classList.add('short-vanish')
	createContent(buttonContent[nextButton], nextButton)
	animations()

	HideShowCont()
	window.removeEventListener('resize', resizeRotation)
}
function backButtonFunction() {
	console.log('backbuttonfunction')
	console.log(buttonGridContainer)

	ArreglarLineas()
	buttonGrid.style.pointerEvents = 'none'
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(video2, video2, video3, 'back')
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	video3.addEventListener('ended', () => {
		// video3.classList.add('short-vanish')
		loop.classList.remove('short-vanish')
		loop.classList.add('show')
		loop.play()
		setTimeout(() => {
			video1.remove()
			video2.remove()
			video3.remove()
			HideShowMainButtons()
		}, 500)

		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}

		showCont.innerHTML = ''
	})
}
function backButtonFunctionFromBack() {
	console.log('working')
	ArreglarLineas()

	subVideoTurn.play()
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	subVideoTurn.addEventListener('ended', () => {
		console.log('subVideoTurn ending')
		loop.classList.remove('short-vanish')
		loop.classList.add('show')

		setTimeout(() => {
			loop.play()
		}, 0)
		subVideoTurn.classList.add('short-vanish')
		console.log(pageIndex)
		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}
		video1.remove()
		video2.remove()
		video3.remove()
		HideShowMainButtons()
		showCont.innerHTML = ''
	})
}

function backButtonFunctionFront() {
	ArreglarLineas()

	console.log('backbuttonfunctionfront')
	backButton.style.pointerEvents = 'none'
	if (nextButton === 'finishO') {
		subVideoFinish1.style.opacity = 0
		subVideoFinish2.style.opacity = 0
		subVideoFinish3.style.opacity = 0
		subVideo2.style.opacity = 1
	}

	InterpolateVideo(subVideo2, subVideo2, subVideo3, 'back')
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		console.log('video3 ended')
		subVideo3.classList.add('short-vanish')

		video2.classList.remove('short-vanish')
		video2.classList.add('show')

		showCont.innerHTML = ''
		video2.currentTime = 0
		video2.pause()
		setTimeout(() => {
			video2.play()
		}, 500)

		pageIndex = 'mainMenuFront'

		nextButton = currentButton
		createContent(buttonContent[currentButton], currentButton)

		animations()

		HideShowCont()
		setTimeout(() => {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}, 500)
	})
}
function backButtonFunctionSpecific() {
	ArreglarLineas()

	console.log('backbuttonfunctionSpecific')
	backButton.style.pointerEvents = 'none'

	// InterpolateVideo(subVideo2, subVideo2, subVideo3)
	specificVideo.classList.remove('show')
	specificVideo.classList.add('short-vanish')
	HideShowCont()

	// setTimeout(() => {
	// 	video2.classList.remove('short-vanish')
	// 	video2.classList.add('show')
	// }, 500)

	showCont.innerHTML = ''

	// subVideo2.currentTime = 0

	console.log(buttonContent[currentButton])
	nextButton = currentButton
	createContent(buttonContent[pageIndex].boxInfo[currentButton])
	currentButton = pageIndex
	pageIndex = 'mainMenuFront'
	console.log('nextButton:' + nextButton)
	console.log('currentButton:' + currentButton)
	console.log('pageIndex:' + pageIndex)
	animations()

	HideShowCont()
	setTimeout(() => {
		specificVideo.remove()
	}, 500)
}
function backButtonFunctionBack() {
	ArreglarLineas()
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(subVideo2, subVideo2, subVideo3, 'back')
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		subVideo3.classList.add('short-vanish')
		subVideoTurn.classList.remove('short-vanish')
		showCont.innerHTML = ''

		pageIndex = 'mainMenuBack'
		createContent(buttonContent[dataId[1]], dataId[1])

		HideShowCont()
	})
}

function createBackButton(param) {
	const rotationBackButton = document.querySelector('#rotation_backButton')
	if (rotationBackButton) {
		rotationBackButton.remove()
	}

	if (param === 'rotationPage') {
		const centerContainerMade = document.createElement('div')
		centerContainerMade.classList.add('centerContainer')
		// centerContainerMade.style.pointerEvents = 'none'
		centerContainerMade.setAttribute('id', 'centerContainer_text')
		const textContainerMade = document.createElement('div')
		textContainerMade.classList.add('textContainer')
		textContainerMade.style.width = containVideoWidth + 'px'
		textContainerMade.style.height = containVideoHeight + 'px'
		rotationPage = document.createElement('div')
		rotationPage.classList.add('rotationPage')

		backButtonRotation = document.createElement('button')
		backButtonRotation.classList.add('backButton')
		backButtonRotation.style.fontSize = buttonFontvar
		backButtonRotation.style.width = `calc(47px + (147 - 47) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`

		backButtonRotation.classList.add('button')
		backButtonRotation.addEventListener('click', exitRotation)
		console.log(backButtonRotation)
		backButtonRotation.textContent = 'Back'
		backButtonRotation.style.pointerEvents = 'all'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = 'assets/icons/onefiftyLogo.png'
		brandIcon.classList.add('brandIcon', 'brandIconR')
		backButtonContainer.classList.add('viewRContainer')
		rotation.appendChild(centerContainerMade)
		centerContainerMade.appendChild(textContainerMade)

		textContainerMade.appendChild(rotationPage)
		rotationPage.appendChild(backButtonContainer)
		backButtonContainer.appendChild(backButtonRotation)
		backButtonContainer.appendChild(brandIcon)
		centerContainerMade.setAttribute('id', 'rotation_backButton')
	} else {
		backButton = document.createElement('button')
		backButton.classList.add('backButton')
		backButton.style.fontSize = buttonFontvar

		backButton.style.width = `calc(47px + (147 - 47) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`

		backButton.classList.add('button')

		backButton.textContent = 'Back'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = 'assets/icons/onefiftyLogo.png'
		brandIcon.classList.add('brandIcon')
		backButtonContainer.classList.add('backButtonContainer')

		firstPage.appendChild(backButtonContainer)

		backButtonContainer.appendChild(backButton)
		backButtonContainer.appendChild(brandIcon)

		if (param === 'rotation') {
		} else if (
			nextButton === 'standardO' ||
			nextButton === 'piggybackingP' ||
			nextButton === 'emergencyE' ||
			nextButton === 'finishO' ||
			nextButton === 'tailgatingP' ||
			nextButton === 'tailgatingP1' ||
			nextButton === 'tailgatingP2' ||
			nextButton === 'glassO' ||
			nextButton === 'piggybackingP1' ||
			nextButton === 'piggybackingP2' ||
			nextButton === 'operationW' ||
			nextButton === 'beSecure' ||
			nextButton === 'stereoV' ||
			nextButton === 'documents'
		) {
			backButton.addEventListener('click', backButtonFunctionFront)
		} else if (currentButton === 'stereoV' || currentButton === 'beSecure') {
			backButton.addEventListener('click', backButtonFunctionSpecific)
		} else if (
			nextButton === 'easyR' ||
			nextButton === 'ex78934S' ||
			nextButton === 'kr-bkzdinB'
		) {
			backButton.addEventListener('click', backButtonFunctionBack)
		} else if (pageIndex === 'mainMenuFront') {
			backButton.addEventListener('click', backButtonFunction)
		} else if (pageIndex === 'mainMenuBack') {
			backButton.addEventListener('click', backButtonFunctionFromBack)
		}
	}
}

function ArreglarLineas() {
	for (let i = 0; i < svgContainer.length; i++) {
		svgContainer[i].style.width = containVideoWidth + 'px'
		svgContainer[i].style.height = containVideoHeight + 'px'
	}
	for (let i = 0; i < buttonContainer.length; i++) {
		buttonContainer[i].style.width = containVideoWidth + 'px'
		buttonContainer[i].style.height = containVideoHeight + 'px'
	}
	// mainButtons.style.opacity = '0'
	if (!mainButtons.classList.contains('disabled')) {
		mainButtons.classList.add('show')
	}
}

function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
	var oRatio = width / height,
		cRatio = cWidth / cHeight
	return function () {
		if (contains ? oRatio > cRatio : oRatio < cRatio) {
			this.width = cWidth
			this.height = cWidth / oRatio
		} else {
			this.width = cHeight * oRatio
			this.height = cHeight
		}
		this.left = (cWidth - this.width) * (pos / 100)
		this.right = this.width + this.left
		return this
	}.call({})
}

function getImgSizeInfo(img) {
	var pos = window
		.getComputedStyle(img)
		.getPropertyValue('object-position')
		.split(' ')
	return getRenderedSize(
		true,
		img.offsetWidth,
		img.offsetHeight,
		img.videoWidth,
		img.videoHeight,
		parseInt(pos[0])
	)
}

loop.addEventListener('loadedmetadata', function (e) {
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	setFontSizes()
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
})

if (loop.readyState >= 1) {
	setFontSizes()
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
}

window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	}
})

window.addEventListener('resize', function () {
	if (loop.readyState >= 1) {
		containVideoWidth = getImgSizeInfo(loop).width
		containVideoHeight = getImgSizeInfo(loop).height

		setFontSizes()

		if (!mainButtons.classList.contains('disabled')) {
			ArreglarLineas()
		}
	}
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			warning.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
	// if(){}
})

////////// Event Listeners for the main buttons //////////

fullscreen_button.addEventListener('click', function (e) {
	expand.classList.toggle('disabledb')
	contract.classList.toggle('disabledb')

	if (!document.fullscreenElement) {
		mainContainer.webkitRequestFullscreen()
		mainContainer.webkitEnterFullscreen()
		mainContainer.requestFullscreen()
	} else {
		document.exitFullscreen()
		document.webkitExitFullscreen()
	}
})

mainMenuB.forEach((e, i) => {
	dataId[i] = e.dataset.id
	dataVariant[i] = e.dataset.variant

	e.addEventListener('click', function (e) {
		pageIndex = 'mainMenuFront'
		nextButton = dataId[i]

		HideShowMainButtons()
		if (dataVariant[i]) {
			createVideos(
				`assets/${nextButton}${dataVariant[i]}/${nextButton}1.mp4`,
				`assets/${nextButton}${dataVariant[i]}/${nextButton}2.mp4`,
				`assets/${nextButton}${dataVariant[i]}/${nextButton}3.mp4`
			)
		} else {
			createVideos(
				`assets/${nextButton}/${nextButton}1.mp4`,
				`assets/${nextButton}/${nextButton}2.mp4`,
				`assets/${nextButton}/${nextButton}3.mp4`
			)
		}

		if (showCont.innerHTML !== '') {
			showCont.innerHTML = ''
		}

		createContent(buttonContent[nextButton], nextButton)

		window.addEventListener('resize', function (e) {
			if (showCont.hasChildNodes()) {
				const textContainer = document.querySelector('#centerContainer_text')

				textContainer.remove()

				// backButtonContainer.remove()

				if (pageIndex === 'mainMenuFront') {
					createContent(buttonContent[nextButton], nextButton)
				} else {
					if (
						nextButton === 'authorizedE' ||
						nextButton === 'walkA' ||
						nextButton === 'piggyBBS' ||
						nextButton === 'oneP' ||
						nextButton === 'lowO' ||
						nextButton === 'multipleP' ||
						nextButton === 'sensorB'
					) {
						createContent()
					} else {
						console.log(currentButton)
						console.log(nextButton)
						createContent(buttonContent[currentButton].boxInfo[nextButton])
					}
					elementContainer.style.opacity = '1'
				}

				animations()
				if (subVideo2) {
					subVideo2.currentTime = 0
					subVideo2.play()
				}
			}
		})
		let videosCheck = false
		check1()
		function check1() {
			clearcheck = setInterval(repeatcheck, 600)
			function repeatcheck() {
				if (video1.readyState === 4) {
					videosCheck = true
				}

				setTimeout(() => {
					if (!videosCheck) {
						loader.style.zIndex = '200'
						loader.classList.add('show')
					}
				}, 3000)

				if (videosCheck) {
					loader.classList.remove('show')
					loader.classList.add('short-vanish')
					loader.style.zIndex = '-200'

					clearInterval(clearcheck)

					loop.classList.add('short-vanish')
					loop.classList.remove('show')
					video1.style.opacity = 1

					video1.play()
					video1.addEventListener('ended', () => {
						animations()
						InterpolateVideo(loop, video1, video2)
						HideShowCont()
					})
				}
			}
		}
	})
})

// Check when the spinner is fully loaded
var SirvOptions = {
	spin: {
		onready: function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'

			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		},
	},
}

close.addEventListener('click', function (e) {
	modalalert.style.pointerEvents = 'none'
	modalalert.style.transform = 'scale(0)'
	alertdiv.style.opacity = 0
	alertdiv.style.pointerEvents = 'none'
})
