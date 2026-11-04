import { defaultMessage } from "../../message/defaultMessage.js";
import { step2Message } from "../../message/step2/step2Message.js";

export const STEP2 = {
    name: "STEP2",
    className: "step2",
    children: [
        {
            name: step2Message.COMBINATION_CHECK,
            content: step2Message.QUESTION_NUM,
            children: [
                {
                    name: step2Message.QUESTION_TO_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_TO_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AO + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_TO_1.HINT_AO_1
                        },
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AO + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_TO_1.HINT_AO_2,
                            image: "images/hint_o.jpg"
                        },
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AO + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_TO_1.HINT_AO_3
                        },
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AO + defaultMessage.ANS,
                            content: step2Message.QUESTION_TO_1.ANS
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_NI_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_NI_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_NI_1.HINT_BE + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_NI_1.HINT_BE_1
                        },
                        {
                            name: step2Message.QUESTION_NI_1.HINT_BE + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_NI_1.HINT_BE_2
                        },
                        {
                            name: step2Message.QUESTION_NI_1.HINT_BE + defaultMessage.ANS,
                            content: step2Message.QUESTION_NI_1.ANS
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HO_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HO_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HO_1.HINT_CD + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HO_1.HINT_CD_1
                        },
                        {
                            name: step2Message.QUESTION_HO_1.HINT_CD + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HO_1.HINT_CD_2
                        },
                        {
                            name: step2Message.QUESTION_HO_1.HINT_CD + defaultMessage.ANS,
                            content: step2Message.QUESTION_HO_1.ANS
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HE_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HE_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DC + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HE_1.HINT_DC_1
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DC + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HE_1.HINT_DC_2
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DC + defaultMessage.ANS,
                            content: step2Message.QUESTION_HE_1.ANS_DC
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DI + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_RO_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_RO_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_RO_1.HINT_EB + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_RO_1.HINT_EB_1
                        },
                        {
                            name: step2Message.QUESTION_RO_1.HINT_EB + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_RO_1.HINT_EB_2
                        },
                        {
                            name: step2Message.QUESTION_RO_1.HINT_EB + defaultMessage.ANS,
                            content: step2Message.QUESTION_RO_1.ANS
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_TO_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_TO_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FJ + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HO_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HO_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HO_2.HINT_GH + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_R.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_R.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_R.HINT_HG + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_NI_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_NI_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_NI_2.HINT_ID + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_I_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_I_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_I_1.HINT_JF + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_I_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_I_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_I_2.HINT_KL + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HA_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HA_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LK + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HA_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HA_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HA_2.HINT_MN + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_RO_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_RO_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_RO_2.HINT_NM + defaultMessage.HINT_NUM_1,
                            content: "ヒントの内容"
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HE_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HE_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OA + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HE_2.HINT_OA_1
                        },
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OA + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HE_2.HINT_OA_2,
                            image: "images/hint_o.jpg"
                        },
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OA + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_HE_2.HINT_OA_3
                        },
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OA + defaultMessage.ANS,
                            content: step2Message.QUESTION_HE_2.ANS
                        }
                    ]
                },
            ]
        },
        {
            name: step2Message.COMBINATION_CORRECT,
            content: "正しい組み合わせ"
        }
    ]
};
