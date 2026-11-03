
const COMBINATION_MESSAGE_END = "と組み合わせることが出来る謎を確認";

const COMBINATION_ABLE_MESSAGE_END = "と組み合わせることが出来ます。";

export const step2Message = {

    COMBINATION_CHECK: "考えられる組み合わせを確認",

    COMBINATION_CORRECT: "正しい組み合わせを確認",

    QUESTION_NUM: "ここでは各謎を以下のアルファベットで管理します。\n「ごかく→はちかく」と書かれている謎→A\n「たけの間」と書かれている謎→B\n「ファイル」と書かれている謎→C\n5色のピースがある謎→D\n星や檻のイラストが書かれている謎→E\n迷路の謎→F\n「ファとラの〜」と書かれている謎→G\n「1文字目を〜」と書かれている謎→H\n5×5マスの枠がある謎→I\n枯葉のイラストが書かれている謎→J\n1〜0の数字が書かれている謎→K\n「2×14」と書かれている謎→L\n6マスの枠が3列並んでいる謎→M\n「ぶるえといた」と書かれている謎→N\nスケルトンの謎→O",

    QUESTION_HA_1: {
        COMBINATION_MESSAGE: "L" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "K" + COMBINATION_ABLE_MESSAGE_END,
        HINT_LK: "LとKの"
    },
    QUESTION_HA_2: {
        COMBINATION_MESSAGE: "M" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "N" + COMBINATION_ABLE_MESSAGE_END,
        HINT_MN: "MとNの"
    },
    QUESTION_NI_1: {
        COMBINATION_MESSAGE: "B" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "E" + COMBINATION_ABLE_MESSAGE_END,
        HINT_BE: "BとEの",
        HINT_BE_1: "それぞれをイラストと漢字で考えましょう。",
        HINT_BE_2: "竹のイラストと漢字の「竹」の間を読むと「こおり（こ+檻のイラスト）になります。」",
        ANS: "答えは「オリーブ」です。"
    },
    QUESTION_NI_2: {
        COMBINATION_MESSAGE: "I" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "D" + COMBINATION_ABLE_MESSAGE_END,
        HINT_ID: "IとDの"
    },
    QUESTION_HO_1: {
        COMBINATION_MESSAGE: "C" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "D" + COMBINATION_ABLE_MESSAGE_END,
        HINT_CD: "CとDの",
        HINT_CD_1: "5色のピースをスケルトンの盤面として考えてみましょう。",
        HINT_CD_2: "竹のイラストと漢字の「竹」の間を読むと「こおり（こ+檻のイラスト）になります。」",
        ANS: "答えは「オリーブ」です。"
    },
    QUESTION_HO_2: {
        COMBINATION_MESSAGE: "G" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "H" + COMBINATION_ABLE_MESSAGE_END,
        HINT_GH: "GとHの"
    },
    QUESTION_HE_1: {
        COMBINATION_MESSAGE: "D" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "C、I" + COMBINATION_ABLE_MESSAGE_END,
        HINT_DC: "DとCの",
        HINT_DI: "DとIの"
    },
    QUESTION_HE_2: {
        COMBINATION_MESSAGE: "O" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "A" + COMBINATION_ABLE_MESSAGE_END,
        HINT_OA: "OとAの",
        HINT_OA_1: "まずはスケルトンを埋めましょう。",
        HINT_OA_2: "枠に書かれている五角形と八角形の間を読むと「かみ」になりそうです。",
        ANS: "答えは「アビス」です。"
    },
    QUESTION_TO_1: {
        COMBINATION_MESSAGE: "A" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "O" + COMBINATION_ABLE_MESSAGE_END,
        HINT_AO: "AとOの",
        HINT_AO_1: "まずはスケルトンを埋めましょう。",
        HINT_AO_2: "枠に書かれている五角形と八角形の間を読むと「かみ」になりそうです。",
        ANS: "答えは「アビス」です。"
    },
    QUESTION_TO_2: {
        COMBINATION_MESSAGE: "F" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "J" + COMBINATION_ABLE_MESSAGE_END,
        HINT_FJ: "FとJの"
    },
    QUESTION_I_1: {
        COMBINATION_MESSAGE: "J" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "F" + COMBINATION_ABLE_MESSAGE_END,
        HINT_JF: "JとFの"
    },
    QUESTION_I_2: {
        COMBINATION_MESSAGE: "K" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "L" + COMBINATION_ABLE_MESSAGE_END,
        HINT_KL: "KとLの"
    },
    QUESTION_RO_1: {
        COMBINATION_MESSAGE: "E" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "B" + COMBINATION_ABLE_MESSAGE_END,
        HINT_EB: "EとBの",
        HINT_EB_1: "それぞれをイラストと漢字で考えましょう。",
        HINT_EB_2: "竹のイラストと漢字の「竹」の間を読むと「こおり（こ+檻のイラスト）になります。」",
        ANS: "答えは「オリーブ」です。"
    },
    QUESTION_RO_2: {
        COMBINATION_MESSAGE: "N" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "M" + COMBINATION_ABLE_MESSAGE_END,
        HINT_NM: "NとMの"
    },
    QUESTION_R: {
        COMBINATION_MESSAGE: "H" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "G" + COMBINATION_ABLE_MESSAGE_END,
        HINT_HG: "HとGの"
    }
};
