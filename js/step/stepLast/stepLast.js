import { defaultMessage } from "../../message/defaultMessage.js";
import { stepLastMessage } from "../../message/stepLast/stepLastMessage.js";

export const STEP_LAST = {
    name: "STEP LAST",
    className: "step-last",
    children: [
        {
            name: stepLastMessage.LAST_HINT_A,
            children: [
                {
                    name: defaultMessage.HINT_NUM_1,
                    content: stepLastMessage.LAST_HINT_1.HINT_1
                },
                {
                    name: defaultMessage.HINT_NUM_2,
                    content: stepLastMessage.LAST_HINT_1.HINT_2
                },
                {
                    name: defaultMessage.HINT_NUM_3,
                    content: stepLastMessage.LAST_HINT_1.HINT_3
                },
                {
                    name: defaultMessage.HINT_NUM_4,
                    content: stepLastMessage.LAST_HINT_1.HINT_4
                },
                {
                    name: defaultMessage.HINT_NUM_5,
                    content: stepLastMessage.LAST_HINT_1.HINT_5
                },
                {
                    name: "黒枠内の言葉を確認する",
                    content: stepLastMessage.LAST_HINT_1.ANS
                }
            ]
        },
        {
            name: stepLastMessage.LAST_HINT_B,
            children: [
                {
                    name: defaultMessage.HINT_NUM_1,
                    content: stepLastMessage.LAST_HINT_2.HINT_1
                },
                {
                    name: defaultMessage.HINT_NUM_2,
                    content: stepLastMessage.LAST_HINT_2.HINT_2
                },
                {
                    name: defaultMessage.HINT_NUM_3,
                    content: stepLastMessage.LAST_HINT_2.HINT_3
                },
                {
                    name: defaultMessage.HINT_NUM_4,
                    content: stepLastMessage.LAST_HINT_2.HINT_4
                },
                {
                    name: "？に入る言葉を確認する",
                    content: stepLastMessage.LAST_HINT_1.ANS
                }
            ]
        },
        {
            name: stepLastMessage.LAST_HINT_C,
            children: [
                {
                    name: defaultMessage.HINT_NUM_1,
                    content: stepLastMessage.LAST_HINT_3.HINT_1
                },
                {
                    name: defaultMessage.HINT_NUM_2,
                    content: stepLastMessage.LAST_HINT_3.HINT_2
                },
                {
                    name: defaultMessage.HINT_NUM_3,
                    content: stepLastMessage.LAST_HINT_3.HINT_3
                },
                {
                    name: defaultMessage.HINT_NUM_4,
                    content: stepLastMessage.LAST_HINT_3.HINT_4
                },
                {
                    name: defaultMessage.HINT_NUM_5,
                    content: stepLastMessage.LAST_HINT_3.HINT_5
                },
                {
                    name: defaultMessage.ANS,
                    content: stepLastMessage.LAST_HINT_3.ANS
                }
            ]
        }
    ]
};
