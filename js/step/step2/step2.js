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
                            name: step2Message.QUESTION_TO_1.HINT_AF + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_TO_1.HINT_AF_1
                        },
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AF + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_TO_1.HINT_AF_2,
                        },
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AF + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_TO_1.HINT_AF_3
                        },
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AF + defaultMessage.HINT_NUM_4,
                            content: step2Message.QUESTION_TO_1.HINT_AF_4
                        },
                        {
                            name: step2Message.QUESTION_TO_1.HINT_AF + defaultMessage.ANS,
                            content: step2Message.QUESTION_TO_1.ANS_AF
                        },
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
                            content: step2Message.QUESTION_TO_1.ANS_AO
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
                            content: step2Message.QUESTION_NI_1.ANS_BE
                        },
                        {
                            name: step2Message.QUESTION_NI_1.HINT_BI + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_NI_1.HINT_BI_1
                        },
                        {
                            name: step2Message.QUESTION_NI_1.HINT_BI + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_NI_1.HINT_BI_2
                        },
                        {
                            name: step2Message.QUESTION_NI_1.HINT_BI + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_NI_1.HINT_BI_3
                        },
                        {
                            name: step2Message.QUESTION_NI_1.HINT_BI + defaultMessage.ANS,
                            content: step2Message.QUESTION_NI_1.ANS_BI
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
                            content: step2Message.QUESTION_HO_1.ANS_CD
                        },
                        {
                            name: step2Message.QUESTION_HO_1.HINT_CG + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HO_1.HINT_CG_1
                        },
                        {
                            name: step2Message.QUESTION_HO_1.HINT_CG + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HO_1.HINT_CG_2
                        },
                        {
                            name: step2Message.QUESTION_HO_1.HINT_CG + defaultMessage.ANS,
                            content: step2Message.QUESTION_HO_1.ANS_CG
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
                            content: step2Message.QUESTION_HE_1.HINT_DI_1
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DI + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HE_1.HINT_DI_2
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DI + defaultMessage.ANS,
                            content: step2Message.QUESTION_HE_1.ANS_DI
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DO + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HE_1.HINT_DO_1
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DO + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HE_1.HINT_DO_2
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DO + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_HE_1.HINT_DO_3
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DO + defaultMessage.HINT_NUM_4,
                            content: step2Message.QUESTION_HE_1.HINT_DO_4
                        },
                        {
                            name: step2Message.QUESTION_HE_1.HINT_DO + defaultMessage.ANS,
                            content: step2Message.QUESTION_HE_1.ANS_DO
                        },
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
                            content: step2Message.QUESTION_RO_1.ANS_EB
                        },
                        {
                            name: step2Message.QUESTION_RO_1.HINT_EN + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_RO_1.HINT_EN_1
                        },
                        {
                            name: step2Message.QUESTION_RO_1.HINT_EN + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_RO_1.HINT_EN_2
                        },
                        {
                            name: step2Message.QUESTION_RO_1.HINT_EN + defaultMessage.ANS,
                            content: step2Message.QUESTION_RO_1.ANS_EN
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_TO_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_TO_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FA + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_TO_2.HINT_FA_1
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FA + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_TO_2.HINT_FA_2
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FA + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_TO_2.HINT_FA_3
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FA + defaultMessage.HINT_NUM_4,
                            content: step2Message.QUESTION_TO_2.HINT_FA_4
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FA + defaultMessage.ANS,
                            content: step2Message.QUESTION_TO_2.ANS_FA
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FJ + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_TO_2.HINT_FJ_1
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FJ + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_TO_2.HINT_FJ_2
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FJ + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_TO_2.HINT_FJ_3
                        },
                        {
                            name: step2Message.QUESTION_TO_2.HINT_FJ + defaultMessage.ANS,
                            content: step2Message.QUESTION_TO_2.ANS_FJ
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HO_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HO_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HO_2.HINT_GC + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HO_2.HINT_GC_1
                        },
                        {
                            name: step2Message.QUESTION_HO_2.HINT_GC + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HO_2.HINT_GC_2
                        },
                        {
                            name: step2Message.QUESTION_HO_2.HINT_GC + defaultMessage.ANS,
                            content: step2Message.QUESTION_HO_2.ANS_GC
                        },
                        {
                            name: step2Message.QUESTION_HO_2.HINT_GH + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HO_2.HINT_GH_1
                        },
                        {
                            name: step2Message.QUESTION_HO_2.HINT_GH + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HO_2.HINT_GH_2
                        },
                        {
                            name: step2Message.QUESTION_HO_2.HINT_GH + defaultMessage.ANS,
                            content: step2Message.QUESTION_HO_2.ANS_GH
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_R.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_R.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_R.HINT_HG + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_R.HINT_HG_1
                        },
                        {
                            name: step2Message.QUESTION_R.HINT_HG + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_R.HINT_HG_2
                        },
                        {
                            name: step2Message.QUESTION_R.HINT_HG + defaultMessage.ANS,
                            content: step2Message.QUESTION_R.ANS_HG
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_NI_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_NI_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_NI_2.HINT_IB + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_NI_2.HINT_IB_1
                        },
                        {
                            name: step2Message.QUESTION_NI_2.HINT_IB + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_NI_2.HINT_IB_2
                        },
                        {
                            name: step2Message.QUESTION_NI_2.HINT_IB + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_NI_2.HINT_IB_3
                        },
                        {
                            name: step2Message.QUESTION_NI_2.HINT_IB + defaultMessage.ANS,
                            content: step2Message.QUESTION_NI_2.ANS_IB
                        },
                        {
                            name: step2Message.QUESTION_NI_2.HINT_ID + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_NI_2.HINT_ID_1
                        },
                        {
                            name: step2Message.QUESTION_NI_2.HINT_ID + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_NI_2.HINT_ID_2
                        },
                        {
                            name: step2Message.QUESTION_NI_2.HINT_ID + defaultMessage.ANS,
                            content: step2Message.QUESTION_NI_2.ANS_ID
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_I_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_I_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_I_1.HINT_JF + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_I_1.HINT_JF_1
                        },
                        {
                            name: step2Message.QUESTION_I_1.HINT_JF + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_I_1.HINT_JF_2
                        },
                        {
                            name: step2Message.QUESTION_I_1.HINT_JF + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_I_1.HINT_JF_3
                        },
                        {
                            name: step2Message.QUESTION_I_1.HINT_JF + defaultMessage.ANS,
                            content: step2Message.QUESTION_I_1.ANS_JF
                        },
                        {
                            name: step2Message.QUESTION_I_1.HINT_JK + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_I_1.HINT_JK_1
                        },
                        {
                            name: step2Message.QUESTION_I_1.HINT_JK + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_I_1.HINT_JK_2
                        },
                        {
                            name: step2Message.QUESTION_I_1.HINT_JK + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_I_1.HINT_JK_3
                        },
                        {
                            name: step2Message.QUESTION_I_1.HINT_JK + defaultMessage.ANS,
                            content: step2Message.QUESTION_I_1.ANS_JK
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_I_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_I_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_I_2.HINT_KJ + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_I_2.HINT_KJ_1
                        },
                        {
                            name: step2Message.QUESTION_I_2.HINT_KJ + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_I_2.HINT_KJ_2
                        },
                        {
                            name: step2Message.QUESTION_I_2.HINT_KJ + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_I_2.HINT_KJ_3
                        },
                        {
                            name: step2Message.QUESTION_I_2.HINT_KJ + defaultMessage.ANS,
                            content: step2Message.QUESTION_I_2.ANS_KJ
                        },
                        {
                            name: step2Message.QUESTION_I_2.HINT_KL + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_I_2.HINT_KL_1
                        },
                        {
                            name: step2Message.QUESTION_I_2.HINT_KL + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_I_2.HINT_KL_2
                        },
                        {
                            name: step2Message.QUESTION_I_2.HINT_KL + defaultMessage.ANS,
                            content: step2Message.QUESTION_I_2.ANS_KL
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HA_1.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HA_1.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LK + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HA_1.HINT_LK_1
                        },
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LK + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HA_1.HINT_LK_2
                        },
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LK + defaultMessage.ANS,
                            content: step2Message.QUESTION_HA_1.ANS_LK
                        },
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LM + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HA_1.HINT_LM_1
                        },
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LM + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HA_1.HINT_LM_2
                        },
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LM + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_HA_1.HINT_LM_3
                        },
                        {
                            name: step2Message.QUESTION_HA_1.HINT_LM + defaultMessage.ANS,
                            content: step2Message.QUESTION_HA_1.ANS_LM
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_HA_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_HA_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_HA_2.HINT_ML + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HA_2.HINT_ML_1
                        },
                        {
                            name: step2Message.QUESTION_HA_2.HINT_ML + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HA_2.HINT_ML_2
                        },
                        {
                            name: step2Message.QUESTION_HA_2.HINT_ML + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_HA_2.HINT_ML_3
                        },
                        {
                            name: step2Message.QUESTION_HA_2.HINT_ML + defaultMessage.ANS,
                            content: step2Message.QUESTION_HA_2.ANS_ML
                        },
                        {
                            name: step2Message.QUESTION_HA_2.HINT_MN + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HA_2.HINT_MN_1
                        },
                        {
                            name: step2Message.QUESTION_HA_2.HINT_MN + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HA_2.HINT_MN_2
                        },
                        {
                            name: step2Message.QUESTION_HA_2.HINT_MN + defaultMessage.ANS,
                            content: step2Message.QUESTION_HA_2.ANS_MN
                        }
                    ]
                },
                {
                    name: step2Message.QUESTION_RO_2.COMBINATION_MESSAGE,
                    content: step2Message.QUESTION_RO_2.COMBINATION_ABLE_MESSAGE,
                    children: [
                        {
                            name: step2Message.QUESTION_RO_2.HINT_NE + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_RO_2.HINT_NE_1
                        },
                        {
                            name: step2Message.QUESTION_RO_2.HINT_NE + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_RO_2.HINT_NE_2
                        },
                        {
                            name: step2Message.QUESTION_RO_2.HINT_NE + defaultMessage.ANS,
                            content: step2Message.QUESTION_RO_2.ANS_NE
                        },
                        {
                            name: step2Message.QUESTION_RO_2.HINT_NM + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_RO_2.HINT_NM_1
                        },
                        {
                            name: step2Message.QUESTION_RO_2.HINT_NM + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_RO_2.HINT_NM_2
                        },
                        {
                            name: step2Message.QUESTION_RO_2.HINT_NM + defaultMessage.ANS,
                            content: step2Message.QUESTION_RO_2.ANS_NM
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
                            content: step2Message.QUESTION_HE_2.ANS_OA
                        },
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OD + defaultMessage.HINT_NUM_1,
                            content: step2Message.QUESTION_HE_2.HINT_OD_1
                        },
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OD + defaultMessage.HINT_NUM_2,
                            content: step2Message.QUESTION_HE_2.HINT_OD_2,
                        },
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OD + defaultMessage.HINT_NUM_3,
                            content: step2Message.QUESTION_HE_2.HINT_OD_3
                        },
                        {
                            name: step2Message.QUESTION_HE_2.HINT_OD + defaultMessage.ANS,
                            content: step2Message.QUESTION_HE_2.ANS_OD
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
