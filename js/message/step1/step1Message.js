// ステップ1のヒント文章を管理する定数クラス


const ILLUST_MESSAGE_END = "のイラストが入ります。";

export const step1Message = {

    ILLUST_INSIDE: "黒塗りに入るイラストの確認",

    QUESTION_DO: {
        QUESTION: "5色の丸が並んでいる謎",
        ILLUST: "「トランプのエース」" + ILLUST_MESSAGE_END
    },
    QUESTION_RE: {
        QUESTION: "紫色と緑色の矢印がある謎",
        ILLUST_INSIDE_1: "1番上の黒塗りに入るイラストの確認",
        ILLUST_INSIDE_2: "上から2番目の黒塗りに入るイラストの確認",
        ILLUST_INSIDE_3: "上から3番目の黒塗りに入るイラストの確認",
        ILLUST_INSIDE_4: "上から4番目の黒塗りに入るイラストの確認",
        ILLUST_1: "「タコ」" + ILLUST_MESSAGE_END,
        ILLUST_2: "「ライオン」" + ILLUST_MESSAGE_END,
        ILLUST_3: "「サメ」" + ILLUST_MESSAGE_END,
        ILLUST_4: "「ゴリラ」" + ILLUST_MESSAGE_END


    },
    QUESTION_MI: {
        QUESTION: "「+1」と書かれている謎",
        ILLUST_INSIDE_1: "左上の黒塗りに入るイラストの確認",
        ILLUST_INSIDE_2: "左下の黒塗りに入るイラストの確認",
        ILLUST_INSIDE_3: "右上の黒塗りに入るイラストの確認",
        ILLUST_1: "「柿」" + ILLUST_MESSAGE_END,
        ILLUST_2: "「菊」" + ILLUST_MESSAGE_END,
        ILLUST_3: "「マイク」" + ILLUST_MESSAGE_END

    },
    QUESTION_FA: {
        QUESTION: "「発布」と書かれている謎",
        ILLUST: "「STOP」" + ILLUST_MESSAGE_END

    },
    QUESTION_SO: {
        QUESTION: "5×5の枠がある謎",
        ILLUST_INSIDE_1: "右上の黒塗りに入るイラストの確認",
        ILLUST_INSIDE_2: "右真ん中の黒塗りに入るイラストの確認",
        ILLUST_1: "「ナース」" + ILLUST_MESSAGE_END,
        ILLUST_2: "「地球」" + ILLUST_MESSAGE_END

    },
    QUESTION_RA: {
        QUESTION: "「日本語と英語で考えよう」と書かれている謎",
        ILLUST: "まずはすべての謎に登場する黒塗りの数を数えてみましょう。"

    },
    QUESTION_SHI: {
        QUESTION: "縦横に点線の入った正方形が3つある謎",
        ILLUST: "「バイク」" + ILLUST_MESSAGE_END

    },

    STEP2: {
        QUESTION_HA: {

        },
        QUESTION_NI: {

        },
        QUESTION_HO: {

        },
        QUESTION_HE: {

        },
        QUESTION_TO: {

        },
        QUESTION_I: {

        },
        QUESTION_RO: {

        },
    },

    STEP_LAST: {

    }
};