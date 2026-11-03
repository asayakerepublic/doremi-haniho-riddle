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
                    name: "問題①",
                    children: [
                        {
                            name: "組み合わせの確認",
                            content: "問題①の組み合わせの確認内容",
                            children: [
                                {
                                    name: "組み合わせ①",
                                    children: [
                                        {
                                            name: "ヒント①",
                                            content: "問題①・組み合わせ①のヒント①"
                                        },
                                        {
                                            name: "ヒント②",
                                            content: "問題①・組み合わせ①のヒント②"
                                        }
                                    ]
                                },
                                {
                                    name: "組み合わせ②",
                                    children: [
                                        {
                                            name: "ヒント①",
                                            content: "問題①・組み合わせ②のヒント①"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "問題②",
                    children: [
                        {
                            name: "組み合わせの確認",
                            content: "問題②の組み合わせの確認内容",
                            children: [
                                {
                                    name: "組み合わせ①",
                                    children: [
                                        {
                                            name: "ヒント①",
                                            content: "問題②・組み合わせ①のヒント①"
                                        },
                                        {
                                            name: "ヒント②",
                                            content: "問題②・組み合わせ①のヒント②"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
