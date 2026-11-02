import { step1Message } from "../../message/step1/step1Message.js";

export const STEP1 = {
    name: "STEP1",
    className: "step1",
    children: [
        {
            name: step1Message.QUESTION_RE.QUESTION,
            children: [
                {
                    name: step1Message.ILLUST_INSIDE,
                    children: [
                        {
                            name: step1Message.QUESTION_RE.ILLUST_INSIDE_1,
                            content: step1Message.QUESTION_RE.ILLUST_1
                        },
                        {
                            name: step1Message.QUESTION_RE.ILLUST_INSIDE_2,
                            content: step1Message.QUESTION_RE.ILLUST_2
                        },
                        {
                            name: step1Message.QUESTION_RE.ILLUST_INSIDE_3,
                            content: step1Message.QUESTION_RE.ILLUST_3
                        },
                        {
                            name: step1Message.QUESTION_RE.ILLUST_INSIDE_4,
                            content: step1Message.QUESTION_RE.ILLUST_4
                        }
                    ]
                },
                {
                    name: step1Message.HINT_NUM_1,
                    content: step1Message.QUESTION_RE.HINT_1
                },
                {
                    name: step1Message.HINT_NUM_2,
                    content: step1Message.QUESTION_RE.HINT_2
                },
                {
                    name: step1Message.ANS,
                    content: step1Message.QUESTION_RE.ANS
                }
            ]
        },
        {
            name: step1Message.QUESTION_SO.QUESTION,
            children: [
                {
                    name: step1Message.ILLUST_INSIDE,
                    children: [
                        {
                            name: step1Message.QUESTION_SO.ILLUST_INSIDE_1,
                            content: step1Message.QUESTION_SO.ILLUST_1
                        },
                        {
                            name: step1Message.QUESTION_SO.ILLUST_INSIDE_2,
                            content: step1Message.QUESTION_SO.ILLUST_2
                        }
                    ]
                },
                {
                    name: "ヒント①",
                    content: "問題ソのヒント①の内容"
                }
            ]
        },
        {
            name: step1Message.QUESTION_MI.QUESTION,
            children: [
                {
                    name: step1Message.ILLUST_INSIDE,
                    children: [
                        {
                            name: step1Message.QUESTION_MI.ILLUST_INSIDE_1,
                            content: step1Message.QUESTION_MI.ILLUST_1
                        },
                        {
                            name: step1Message.QUESTION_MI.ILLUST_INSIDE_2,
                            content: step1Message.QUESTION_MI.ILLUST_2
                        },
                        {
                            name: step1Message.QUESTION_MI.ILLUST_INSIDE_3,
                            content: step1Message.QUESTION_MI.ILLUST_3
                        }
                    ]
                },
                {
                    name: step1Message.HINT_NUM_1,
                    content: step1Message.QUESTION_MI.HINT_1
                },
                {
                    name: step1Message.HINT_NUM_2,
                    content: step1Message.QUESTION_MI.HINT_2
                },
                {
                    name: step1Message.ANS,
                    content: step1Message.QUESTION_MI.ANS
                }
            ]
        },
        {
            name: step1Message.QUESTION_DO.QUESTION,
            children: [
                {
                    name: step1Message.ILLUST_INSIDE,
                    content: step1Message.QUESTION_DO.ILLUST
                },
                {
                    name: step1Message.HINT_NUM_1,
                    content: step1Message.QUESTION_DO.HINT_1
                },
                {
                    name: step1Message.HINT_NUM_2,
                    content: step1Message.QUESTION_DO.HINT_2
                },
                {
                    name: step1Message.ANS,
                    content: step1Message.QUESTION_DO.ANS
                }
            ]
        },

        {
            name: step1Message.QUESTION_FA.QUESTION,
            children: [
                {
                    name: step1Message.ILLUST_INSIDE,
                    content: step1Message.QUESTION_FA.ILLUST
                },
                {
                    name: step1Message.HINT_NUM_1,
                    content: step1Message.QUESTION_FA.HINT_1
                },
                {
                    name: step1Message.HINT_NUM_2,
                    content: step1Message.QUESTION_FA.HINT_2
                },
                {
                    name: step1Message.ANS,
                    content: step1Message.QUESTION_FA.ANS
                }
            ]
        },
        {
            name: step1Message.QUESTION_SHI.QUESTION,
            children: [
                {
                    name: step1Message.ILLUST_INSIDE,
                    content: step1Message.QUESTION_SHI.ILLUST
                },
                {
                    name: "ヒント①",
                    content: "問題シのヒント①の内容"
                }
            ]
        },
        {
            name: step1Message.QUESTION_RA.QUESTION,
            children: [
                {
                    name: step1Message.ILLUST_INSIDE,
                    content: step1Message.QUESTION_RA.ILLUST
                },
                {
                    name: "ヒント①",
                    content: "問題ラのヒント①の内容"
                },
                {
                    name: "ヒント②",
                    content: "問題ラのヒント②の内容"
                }
            ]
        }
    ]
};