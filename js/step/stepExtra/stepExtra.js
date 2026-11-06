import { defaultMessage } from "../../message/defaultMessage.js";
import { stepExtraMessage } from "../../message/stepExtra/stepExtraMessage.js";

export const STEP_EXTRA = {
    name: "EXTRA",
    className: "step-extra",
    children: [
        {
            name: stepExtraMessage.COMBINATION_CHECK,
            content: stepExtraMessage.COMBINATION_ANS,
        },
        {
            name: defaultMessage.ANS,
            content: stepExtraMessage.ANS,
            image: "images/extra_ans.jpg"
        }
    ]
};
