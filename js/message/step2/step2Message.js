
const COMBINATION_MESSAGE_END = "と組み合わせることが出来る謎を確認";

const COMBINATION_ABLE_MESSAGE_END = "と組み合わせることが出来ます。";

export const step2Message = {

    COMBINATION_CHECK: "考えられる組み合わせを確認",

    COMBINATION_CORRECT: "正しい組み合わせを確認",

    QUESTION_NUM: "ここでは各謎を以下のアルファベットで管理します。\n「ごかく→はちかく」と書かれている謎→A\n「たけの間」と書かれている謎→B\n「ファイル」と書かれている謎→C\n5色のピースがある謎→D\n星や檻のイラストが書かれている謎→E\n迷路の謎→F\n「ファとラの〜」と書かれている謎→G\n「1文字目を〜」と書かれている謎→H\n5×5マスの盤面がある謎→I\n枯葉のイラストが書かれている謎→J\n1〜0の数字が書かれている謎→K\n「2×14」と書かれている謎→L\n6マスの枠が3列並んでいる謎→M\n「ぶるえといた」と書かれている謎→N\nスケルトンの謎→O",

    QUESTION_HA_1: {
        COMBINATION_MESSAGE: "L" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "K、M" + COMBINATION_ABLE_MESSAGE_END,
        HINT_LK: "LとKの",
        HINT_LK_1: "まずはそのまま計算をしましょう。",
        HINT_LK_2: "計算結果を上からカタカナに変換しましょう。一番上は「28」なので「コノ」になります。",
        ANS_LK: "答えは「ブタ」です。",
        HINT_LM: "LとMの",
        HINT_LM_1: "まずは上の3行をそのまま計算しましょう。",
        HINT_LM_2: "計算結果は上から「28」「54」「109」になります。",
        HINT_LM_3: "計算結果を仮名に変換してMに埋め、1〜4を対応させましょう。",
        ANS_LM: "答えは「チャーハン」です。"
    },
    QUESTION_HA_2: {
        COMBINATION_MESSAGE: "M" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "L、N" + COMBINATION_ABLE_MESSAGE_END,
        HINT_ML: "MとLの",
        HINT_ML_1: "まずは上の3行をそのまま計算しましょう。",
        HINT_ML_2: "計算結果は上から「28」「54」「109」になります。",
        HINT_ML_3: "計算結果を仮名に変換してMに埋め、1〜4を対応させましょう。",
        ANS_ML: "答えは「チャーハン」です。",
        HINT_MN: "MとNの",
        HINT_MN_1: "枠に言葉をそのまま埋めましょう。",
        HINT_MN_2: "1~4を順に読むと答えです。",
        ANS_MN: "答えは「ケイタイ」です。"
    },
    QUESTION_NI_1: {
        COMBINATION_MESSAGE: "B" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "E、I" + COMBINATION_ABLE_MESSAGE_END,
        HINT_BE: "BとEの",
        HINT_BE_1: "それぞれをの言葉をイラストと漢字で考えましょう。",
        HINT_BE_2: "竹のイラストと漢字の「竹」の間を読むと「こおり（こ+檻のイラスト）」に、穴のイラストと漢字の「穴」の間を読むと「さいころ（サイのイラスト+ころ）」になっています。。",
        ANS_BE: "答えは「オリーブ」です。",
        HINT_BI: "BとIの",
        HINT_BI_1: "それぞれの言葉を漢字で考えましょう。",
        HINT_BI_2: "「竹」は「ケ」と「ケ」、「穴」は「ウ」と「ハ」、「左」は「ナ」と「エ」に分解できそうです。",
        HINT_BI_3: "盤面内の「ケ」と「ケ」の間は「アイス」、「ウ」と「ハ」の間は「ダイス」になっています。",
        ANS_BI: "答えは「テニス」です。"
    },
    QUESTION_NI_2: {
        COMBINATION_MESSAGE: "I" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "B、D" + COMBINATION_ABLE_MESSAGE_END,
        HINT_IB: "IとBの",
        HINT_IB_1: "それぞれの言葉を漢字で考えましょう。",
        HINT_IB_2: "「竹」は「ケ」と「ケ」、「穴」は「ウ」と「ハ」、「左」は「ナ」と「エ」に分解できそうです。",
        HINT_IB_3: "盤面内の「ケ」と「ケ」の間は「アイス」、「ウ」と「ハ」の間は「ダイス」になっています。",
        ANS_IB: "答えは「テニス」です。",
        HINT_ID: "IとDの",
        HINT_ID_1: "5色のピースを5×5の盤面に当てはめましょう。",
        HINT_ID_2: "当てはめると以下のようになります。1から6を順に読みましょう。",
        ANS_ID: "答えは「ジダイオクレ」です。"
    },
    QUESTION_HO_1: {
        COMBINATION_MESSAGE: "C" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "D、G" + COMBINATION_ABLE_MESSAGE_END,
        HINT_CD: "CとDの",
        HINT_CD_1: "5色のピースをスケルトンの盤面として考えてみましょう。",
        HINT_CD_2: "答えが一般的な単語になることにも注意すると以下のように埋まります。1から6を順に読みましょう。",
        ANS_CD: "答えは「キキカイカイ」です。",
        HINT_CG: "CとGの",
        HINT_CG_1: "Cの中に「ファ」と「ラ」の文字が書かれています。",
        HINT_CG_2: "間を高い順に読みましょう。",
        ANS_CG: "答えは「インターホン」です。"
    },
    QUESTION_HO_2: {
        COMBINATION_MESSAGE: "G" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "C、H" + COMBINATION_ABLE_MESSAGE_END,
        HINT_GC: "GとCの",
        HINT_GC_1: "Cの中に「ファ」と「ラ」の文字が書かれています。",
        HINT_GC_2: "間を高い順に読みましょう。",
        ANS_GC: "答えは「インターホン」です。",
        HINT_GH: "GとHの",
        HINT_GH_1: "ファとラの間の4音を高い順に並べましょう。4音なのでソが含まれない側になることに注意です。",
        HINT_GH_2: "高い順に並べると「ミレドシ」になります。1文字目を十二支で来年にしましょう。",
        ANS_GH: "答えは「ウマレドシ」です。"
    },
    QUESTION_HE_1: {
        COMBINATION_MESSAGE: "D" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "C、I、O" + COMBINATION_ABLE_MESSAGE_END,
        HINT_DC: "DとCの",
        HINT_DC_1: "5色のピースをスケルトンの盤面として考えてみましょう。",
        HINT_DC_2: "答えが一般的な単語になることにも注意すると以下のように埋まります。1から6を順に読みましょう。",
        ANS_DC: "答えは「ききかいかい」です。",
        HINT_DI: "DとIの",
        HINT_DI_1: "5色のピースを5×5の枠に当てはめましょう。",
        HINT_DI_2: "当てはめると以下のようになります。1から6を順に読みましょう。",
        ANS_DI: "答えは「ジダイオクレ」です。",
        HINT_DO: "DとOの",
        HINT_DO_1: "まずはスケルトンを埋めましょう。5文字の単語から埋めると考えやすそうです。",
        HINT_DO_2: "正しく埋めると以下のようになります。",
        HINT_DO_3: "5色のピースをスケルトンの盤面に当てはめましょう。",
        HINT_DO_4: "当てはめると以下のようになります。1から6を順に読みましょう。",
        ANS_DO: "答えは「スキンヘッド」です。"
    },
    QUESTION_HE_2: {
        COMBINATION_MESSAGE: "O" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "A、D" + COMBINATION_ABLE_MESSAGE_END,
        HINT_OA: "OとAの",
        HINT_OA_1: "まずはスケルトンを埋めましょう。5文字の単語から埋めると考えやすそうです。",
        HINT_OA_2: "正しく埋めると以下のようになります。",
        HINT_OA_3: "枠に書かれている五角形から八角形に向かって文字を拾うと「かみ」になりそうです。\n同様に三角形から六角形に向かって文字を拾いましょう。",
        ANS_OA: "答えは「アビス」です。",
        HINT_OD: "OとDの",
        HINT_OD_1: "まずはスケルトンを埋めましょう。5文字の単語から埋めると考えやすそうです。",
        HINT_OD_2: "正しく埋めると以下のようになります。",
        HINT_OD_3: "5色のピースをスケルトンの盤面に当てはめましょう。",
        HINT_OD_4: "当てはめると以下のようになります。1から6を順に読みましょう。",
        ANS_OD: "答えは「スキンヘッド」です。"
    },
    QUESTION_TO_1: {
        COMBINATION_MESSAGE: "A" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "F、O" + COMBINATION_ABLE_MESSAGE_END,
        HINT_AF: "AとFの",
        HINT_AF_1: "漢字の画数に注目しましょう。",
        HINT_AF_2: "5画の「句」から8画の「京」まで迷路を進み通った文字を読むと「ごっど」になります。",
        HINT_AF_3: "3画の「土」から6画の「光」まで迷路を進み通った文字を読みましょう。",
        HINT_AF_4: "通った文字を読むと「句点のうえ」となります。句点の上にある文字を順に読みましょう。",
        ANS_AF: "答えは「ニュートラル」です。",
        HINT_AO: "AとOの",
        HINT_AO_1: "まずはスケルトンを埋めましょう。5文字の単語から埋めると考えやすそうです。",
        HINT_AO_2: "正しく埋めると以下のようになります。",
        HINT_AO_3: "枠に書かれている五角形から八角形に向かって文字を拾うと「かみ」になりそうです。\n同様に三角形から六角形に向かって文字を拾いましょう。",
        ANS_AO: "答えは「アビス」です。"
    },
    QUESTION_TO_2: {
        COMBINATION_MESSAGE: "F" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "A、J" + COMBINATION_ABLE_MESSAGE_END,
        HINT_FA: "FとAの",
        HINT_FA_1: "漢字の画数に注目しましょう。",
        HINT_FA_2: "5画の「句」から8画の「京」まで迷路を進み通った文字を読むと「ごっど」になります。",
        HINT_FA_3: "3画の「土」から6画の「光」まで迷路を進み通った文字を読みましょう。",
        HINT_FA_4: "通った文字を読むと「句点のうえ」となります。句点の上にある文字を順に読みましょう。",
        ANS_FA: "答えは「ニュートラル」です。",
        HINT_FJ: "FとJの",
        HINT_FJ_1: "Jの左側は、十二支の何番目を通るかを表しています。",
        HINT_FJ_2: "「寅」「卯」「巳」「未」のイラストの順に迷路を進み通った文字を読むと「木の葉」になります。",
        HINT_FJ_3: "「辰」「巳」「辰」「申」「丑」のイラストの順に迷路を進み通った文字を読みましょう。",
        ANS_FJ: "答えは「ノノシリ」です。"
    },
    QUESTION_I_1: {
        COMBINATION_MESSAGE: "J" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "F、K" + COMBINATION_ABLE_MESSAGE_END,
        HINT_JF: "JとFの",
        HINT_JF_1: "Jの左側は、十二支の何番目を通るかを表しています。",
        HINT_JF_2: "「寅」「卯」「巳」「未」のイラストの順に迷路を進み通った文字を読むと「木の葉」になります。",
        HINT_JF_3: "「辰」「巳」「辰」「申」「丑」のイラストの順に迷路を進み通った文字を読みましょう。",
        ANS_JF: "答えは「ノノシリ」です。",
        HINT_JK: "JとKの",
        HINT_JK_1: "Jの左側を、普通の分数と捉えてみましょう。",
        HINT_JK_2: "例示は「3468/12」つまり「289」になります。",
        HINT_JK_3: "「289」を変換すると「コノハ」になります。下も同様に考えましょう。",
        ANS_JK: "答えは「イレブン」です。"
    },
    QUESTION_I_2: {
        COMBINATION_MESSAGE: "K" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "J、L" + COMBINATION_ABLE_MESSAGE_END,
        HINT_KJ: "KとJの",
        HINT_KJ_1: "Jの左側を、普通の分数と捉えてみましょう。",
        HINT_KJ_2: "例示は「3468/12」つまり「289」になります。",
        HINT_KJ_3: "「289」を変換すると「コノハ」になります。下も同様に考えましょう。",
        ANS_KJ: "答えは「イレブン」です。",
        HINT_KL: "KとLの",
        HINT_KL_1: "まずはそのまま計算をしましょう。",
        HINT_KL_2: "計算結果を上からカタカナに変換しましょう。一番上は「28」なので「コノ」になります。",
        ANS_KL: "答えは「ブタ」です。"
    },
    QUESTION_RO_1: {
        COMBINATION_MESSAGE: "E" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "B、N" + COMBINATION_ABLE_MESSAGE_END,
        HINT_EB: "EとBの",
        HINT_EB_1: "それぞれの言葉をイラストと漢字で考えましょう。",
        HINT_EB_2: "竹のイラストと漢字の「竹」の間を読むと「こおり（こ+檻のイラスト）」に、穴のイラストと漢字の「穴」の間を読むと「さいころ（サイのイラスト+ころ）」になっています。",
        ANS_EB: "答えは「オリーブ」です。",
        HINT_EN: "EとNの",
        HINT_EN_1: "Nの文字を右上から縦に読みましょう。",
        HINT_EN_2: "読むと「たけのいらすとのうえにあるせいぶつは」になります。",
        ANS_EN: "答えは「ロブスター」です。"
    },
    QUESTION_RO_2: {
        COMBINATION_MESSAGE: "N" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "E、M" + COMBINATION_ABLE_MESSAGE_END,
        HINT_NE: "NとEの",
        HINT_NE_1: "Nの文字を右上から縦に読みましょう。",
        HINT_NE_2: "読むと「たけのいらすとのうえにあるせいぶつは」になります。",
        ANS_NE: "答えは「ロブスター」です。",
        HINT_NM: "NとMの",
        HINT_NM_1: "枠に言葉をそのまま埋めましょう。",
        HINT_NM_2: "1~4を順に読むと答えです。",
        ANS_NM: "答えは「ケイタイ」です。"
    },
    QUESTION_R: {
        COMBINATION_MESSAGE: "H" + COMBINATION_MESSAGE_END,
        COMBINATION_ABLE_MESSAGE: "G" + COMBINATION_ABLE_MESSAGE_END,
        HINT_HG: "HとGの",
        HINT_HG_1: "ファとラの間の4音を高い順に並べましょう。4音なのでソが含まれない側になることに注意です。",
        HINT_HG_2: "高い順に並べると「ミレドシ」になります。1文字目を十二支で来年にしましょう。",
        ANS_HG: "答えは「ウマレドシ」です。"
    }
};
