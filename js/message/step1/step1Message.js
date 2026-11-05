// ステップ1のヒント文章を管理する定数クラス
const ILLUST_INSIDE = "黒塗りに入るイラストを確認";
const ILLUST_MESSAGE_END = "のイラストが入ります。";

export const step1Message = {

    QUESTION_DO: {
        QUESTION: "5色の丸が並んでいる謎",
        ILLUST_INSIDE: ILLUST_INSIDE,
        ILLUST: "「トランプのエース」" + ILLUST_MESSAGE_END,
        HINT_1: "イラストは「ACE」です。",
        HINT_2: "アルファベット順で考えましょう。",
        ANS: "答えは「ベッド」です。"
    },
    QUESTION_RE: {
        QUESTION: "紫色と緑色の矢印がある謎",
        ILLUST_INSIDE_1: "1番上の" + ILLUST_INSIDE,
        ILLUST_INSIDE_2: "上から2番目の" + ILLUST_INSIDE,
        ILLUST_INSIDE_3: "上から3番目の" + ILLUST_INSIDE,
        ILLUST_INSIDE_4: "上から4番目の" + ILLUST_INSIDE,
        ILLUST_1: "「タコ」" + ILLUST_MESSAGE_END,
        ILLUST_2: "「ライオン」" + ILLUST_MESSAGE_END,
        ILLUST_3: "「サメ」" + ILLUST_MESSAGE_END,
        ILLUST_4: "「ゴリラ」" + ILLUST_MESSAGE_END,
        HINT_1: "パープルの矢印は「偶数文字目だけを読む」です。",
        HINT_2: "グリーンの矢印は「1文字目を五十音で1つ進める」です。",
        ANS: "答えは「ネックレス」です。"
    },
    QUESTION_MI: {
        QUESTION: "「+1」と書かれている謎",
        ILLUST_INSIDE_1: "左上の" + ILLUST_INSIDE,
        ILLUST_INSIDE_2: "左下の" + ILLUST_INSIDE,
        ILLUST_INSIDE_3: "右上の" + ILLUST_INSIDE,
        ILLUST_1: "「柿」" + ILLUST_MESSAGE_END,
        ILLUST_2: "「菊」" + ILLUST_MESSAGE_END,
        ILLUST_3: "「マイク」" + ILLUST_MESSAGE_END,
        HINT_1: "例示では「か」が「き」に、「き」が「く」に変化しています。",
        HINT_2: "「マイク」も同様に五十音表で1つずつ進めましょう。1文字目が最後にきているのにも注意です。",
        ANS: "答えは「ウケミ」です。"
    },
    QUESTION_FA: {
        QUESTION: "「発布」と書かれている謎",
        ILLUST_INSIDE: ILLUST_INSIDE,
        ILLUST: "「STOP」" + ILLUST_MESSAGE_END,
        HINT_1: "「ハップ」が「はがすと」の矢印で「ストップ」に変化しています。",
        HINT_2: "「はがすと」を「『は』が『すと』になる」と考えましょう。\n「みがくと」も同様に「『み』が『くと』になる」と考えましょう。",
        ANS: "答えは「ファクトリー」です。"
    },
    QUESTION_SO: {
        QUESTION: "5×5マスの枠がある謎",
        ILLUST_INSIDE_1: "右上の" + ILLUST_INSIDE,
        ILLUST_INSIDE_2: "右中央の" + ILLUST_INSIDE,
        ILLUST_1: "「ナース」" + ILLUST_MESSAGE_END,
        ILLUST_2: "「地球」" + ILLUST_MESSAGE_END,
        HINT_1: "それぞれの色の矢印がどのマスからどのマスへ向かっているか考えましょう。\n「地球」のイラストは「アース」と読みます。",
        HINT_2: "枠は五十音表の右5行を表しています。",
        HINT_3: "マゼンタの矢印は「な」から「す」、シアンの矢印は「あ」から「す」に向かっています。\nイエローの矢印は「そ」から「す」に向かっています。",
        ANS: "答えは「ソース」です。"
    },
    QUESTION_RA: {
        QUESTION: "「日本語と英語で考えよう」と書かれている謎",
        ILLUST_INSIDE: ILLUST_INSIDE,
        ILLUST: "イラストは入りません。「黒」として考えましょう。",
        HINT_1: "黒塗りの数に対してイラストの数が1つ少ないことから、ただの「黒」として考えましょう。",
        HINT_2: "日本語は「クロ」、英語は「ブラック」が入ります。",
        ANS: "答えは「クラブ」です。"
    },
    QUESTION_SHI: {
        QUESTION: "縦横に点線の入った正方形が3つある謎",
        ILLUST_INSIDE: ILLUST_INSIDE,
        ILLUST: "「バイク」" + ILLUST_MESSAGE_END,
        HINT_1: "正方形にはそれぞれ漢字1文字が入ります。",
        HINT_2: "「バイク」の例示と不等号の関係から何の漢字が入るか考えましょう。",
        HINT_3: "それぞれ「松」「竹」「梅」が入ります。",
        ANS: "答えは「シチョウ」です。"
    },
    QUESTION_ANS: {
        QUESTION: "すべての謎が解けた後",
        HINT_1: "7問の答えにはイタリア音名のいずれかが含まれます。アンサーシートにすでに書かれている音名を基に、7問の答えを埋めましょう。",
        ANS: "以下のように埋まります。\nキーワードは「スケッチブック」です。",
    }
};