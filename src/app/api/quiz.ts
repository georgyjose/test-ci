import { format } from "date-fns";
import Quiz from "../model/Quiz";

const quizzes: Quiz.RootObject[] = [
    {
        date: '15/09/2022',
        id: 15,
        questions: [
            {
                id: 1,
                question: 'ഇവയിൽ ഏഷ്യൻ ഭൂഖണ്ഡത്തിൽ ഉൾപ്പെടുന്ന രാജ്യങ്ങൾ ഏതൊക്കെ?',
                correctAnswers: [1, 2, 3, 4, 5],
            },
            {
                id: 2,
                question: 'ഇവയിൽ SAARC രാജ്യങ്ങൾ ഏതെല്ലാം ?',
                correctAnswers: [1, 2, 3, 4],
            },
            {
                id: 3,
                question: 'ഇവയിൽ ചൈനയുമായി അതിർത്തി പങ്കിടുന്ന രാജ്യങ്ങൾ ഏതൊക്കെ?',
                correctAnswers: [1, 2, 3],
            },
            {
                id: 4,
                question: 'സത്ലജ് നദി ഇവയിൽ ഏതൊക്കെ രാജ്യങ്ങളിൽ കൂടെ ഒഴുകുന്നുണ്ട്?',
                correctAnswers: [1, 2],
            },
            {
                id: 5,
                question: 'മോഹൻജെദാരോ ഏതുരാജ്യത്താണ് സ്ഥിതി ചെയുന്നത്?',
                correctAnswers: [2],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'ഇന്ത്യ',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'പാകിസ്ഥാൻ',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'ഭൂട്ടാൻ',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'ശ്രീലങ്ക',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'ഇന്തോനേഷ്യ',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'സ്പെയിൻ',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'പോർച്ചുഗൽ',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'കാനഡ',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'ന്യൂസീലാൻഡ്',
                btnVariant: 'violet',
            },
            {
                id: 10,
                label: 'മാൾട്ടാ',
                btnVariant: 'green',
            },
        ],
        targetAnswerId: 2,
    },
    {
        date: '17/09/2022',
        id: 17,
        questions: [
            {
                id: 1,
                question: 'പസഫിക് സമുദ്രവുമായി അതിർത്തി പങ്കിടുന്നത് ഇനി പറയുന്ന രാജ്യങ്ങളിൽ ഏതാണ്?',
                correctAnswers: [1, 2, 5, 8, 10],
            },
            {
                id: 2,
                question: 'താഴെ നൽകിയിരിക്കുന്ന രാജ്യങ്ങളിൽ ഏതൊക്കെയാണ് G20 രാജ്യങ്ങളുടെ ഗ്രൂപ്പിലെ അംഗങ്ങൾ?',
                correctAnswers: [1, 2, 5, 8],
            },
            {
                id: 3,
                question: 'താഴെ നൽകിയിരിക്കുന്ന രാജ്യങ്ങളിൽ ഏതാണ് ആർട്ടിക് സർക്കിളിൽ അംഗങ്ങൾ?',
                correctAnswers: [2, 5, 8],
            },
            {
                id: 4,
                question: 'താഴെ കൊടുത്തിരിക്കുന്നവയിൽ ഏത് രാജ്യങ്ങളാണ് ബെറിംഗ് കടലിടുക്ക് വഴി ബന്ധിപ്പിച്ചിരിക്കുന്നത്?',
                correctAnswers: [5, 8],
            },
            {
                id: 5,
                question: 'ലോകത്തിലെ ഏറ്റവും വലിയ ക്രൂഡ് ഓയിൽ ഉത്പാദിപ്പിക്കുന്ന രാജ്യം ഏത്?',
                correctAnswers: [8],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'ഓസ്‌ട്രേലിയ',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'കാനഡ',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'തുർക്ക്മെനിസ്ഥാൻ',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'പോളണ്ട്',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'റഷ്യ',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'സ്പെയിൻ',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'യു.എ.ഇ',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'യു.എസ്.എ',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'ഹംഗറി',
                btnVariant: 'violet',
            },
            {
                id: 10,
                label: 'ചിലി',
                btnVariant: 'green',
            },
        ],
        targetAnswerId: 8,
    },
    {
        date: '16/09/2022',
        id: 16,
        questions: [
            {
                id: 1,
                question: 'ഇനി പറയുന്ന സംസ്ഥാനങ്ങളിൽ ഏതിൽ കൂടെയാണ് പശ്ചിമഘട്ടം കടന്നു പോകുന്നത്?',
                correctAnswers: [1, 2, 3, 4, 5],
            },
            {
                id: 2,
                question: 'താഴെ തന്നിരിക്കുന്ന സംസ്ഥാനങ്ങളിൽ 20% ശതമാനത്തിനു മുകളിൽ വനമേഖല ഉള്ള സംസ്ഥാനങ്ങൾ ഏതൊക്കെ?',
                correctAnswers: [1, 2, 3, 4],
            },
            {
                id: 3,
                question: 'നീലഗിരി ബയോസ്ഫിയർ ഏതൊക്കെ സംസ്ഥനങ്ങളുടെ ഭാഗമാണ്?',
                correctAnswers: [1, 2, 4],
            },
            {
                id: 4,
                question: 'അഗസ്ത്യമല ബയോസ്ഫിയർ ഏതൊക്കെ സംസ്ഥനങ്ങളുടെ ഭാഗമാണ്?',
                correctAnswers: [1, 2],
            },
            {
                id: 5,
                question: 'കൊട്ടിയൂർ വന്യജീവി സങ്കേതം ഏതു സംസ്ഥാനത്ത് ആണ്?',
                correctAnswers: [1],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'കേരളം',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'തമിഴ്നാട്',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'ഗോവ',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'കർണാടക',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'മഹാരാഷ്ട്ര',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'ഗുജറാത്ത്',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'രാജസ്ഥാൻ',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'പഞ്ചാബ്',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'ബീഹാർ',
                btnVariant: 'violet',
            },
            {
                id: 10,
                label: 'ഹരിയാന',
                btnVariant: 'green',
            },
        ],
        targetAnswerId: 1,
    },
    {
        date: '19/09/2022',
        id: 19,
        questions: [
            {
                id: 1,
                question: 'താഴെ പറയുന്നവരിൽ ആരൊക്കെയാണ് ഭരണഘടനാ അസംബ്ലിയുടെ ഭാഗമായിരുന്നത്?',
                correctAnswers: [1, 2, 3, 4, 5],
            },
            {
                id: 2,
                question: 'താഴെ പറയുന്നവരിൽ ആരൊക്കെയാണ് ആദ്യത്തെ മന്ത്രിസഭയിൽ ഭാഗമായിരുന്നത്?',
                correctAnswers: [1, 2, 3, 4],
            },
            {
                id: 3,
                question: 'താഴെ പറയുന്നവരിൽ ആരൊക്കെയാണ് ഇന്ത്യൻ നാഷണൽ കോൺഗ്രസിന്റെ പ്രസിഡന്റ് ആയിട്ടുള്ളവർ?',
                correctAnswers: [1, 2, 3],
            },
            {
                id: 4,
                question: 'താഴെ പറയുന്നവരിൽ ആരൊക്കെയാണ് പ്രധാനമന്ത്രി-ഉപപ്രധാനമന്ത്രി പദവികൾ വഹിച്ചിട്ടുള്ളത്?',
                correctAnswers: [1, 2],
            },
            {
                id: 5,
                question: 'താഴെ പറയുന്നവരിൽ ആരാണ് ഇന്ത്യയുടെ ആദ്യത്തെ ഉപപ്രധാനമന്ത്രി?',
                correctAnswers: [2],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'ജവഹർലാൽ നെഹ്‌റു',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'സർദാർ വല്ലഭ്ഭായ് പട്ടേൽ',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'ഡോ രാജേന്ദ്ര പ്രസാദ് ',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'ഡോ .ബി .ആർ. അംബേദ്കർ',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'എച് സി മുഖർജി',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'ചന്ദ്രശേഖർ ആസാദ്',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'രാജാ റാം മോഹൻറോയ്',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'ഭഗത് സിംഗ്',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'കെ കേളപ്പൻ',
                btnVariant: 'violet',
            },
        ],
        targetAnswerId: 2,
    },
    {
        date: '18/09/2022',
        id: 18,
        questions: [
            {
                id: 1,
                question: 'താഴെ തന്നിരിക്കുന്നവയിൽ ലോഹങ്ങൾ ഏവ?',
                correctAnswers: [2, 5, 6, 9, 10],
            },
            {
                id: 2,
                question: 'താഴെ തന്നിരിക്കുന്നവയിൽ S ബ്ലോക്ക് മൂലകങ്ങൾ ഏവ?',
                correctAnswers: [5, 6, 9, 10],
            },
            {
                id: 3,
                question: 'താഴെ തന്നിരിക്കുന്നവയിൽ ആൽക്കലൈൻ എർത്ത് മൂലകങ്ങൾ ഏവ?',
                correctAnswers: [5, 6, 10],
            },
            {
                id: 4,
                question: 'അറ്റോമിക നമ്പർ 10ൽ കൂടിയ മൂലകങ്ങൾ?',
                correctAnswers: [5, 10],
            },
            {
                id: 5,
                question: 'മനുഷ്യശരീരത്തിൽ ഏറ്റവും കൂടുതലായി കാണപ്പെടുന്ന മൂലകം?',
                correctAnswers: [5],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'കാർബൺ',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'അയൺ',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'ഹീലിയം',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'ഫോസ്‌ഫറസ്‌',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'കാൽസ്യം',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'ബെറിലിയം',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'ക്ലോറിൻ',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'ഓക്സിജൻ',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'ലിഥിയം',
                btnVariant: 'violet',
            },
            {
                id: 10,
                label: 'മഗ്നീഷ്യം',
                btnVariant: 'green',
            },
        ],
        targetAnswerId: 5,
    },
    {
        date: '20/09/2022',
        id: 20,
        questions: [
            {
                id: 1,
                question: 'UN ൽ വീറ്റോ അധികാരം ഉള്ള രാജ്യങ്ങൾ ഇവയിൽ ഏതൊക്കെ?',
                correctAnswers: [1, 2, 3, 4, 5],
            },
            {
                id: 2,
                question: 'ഇവയിൽ NATO രാജ്യങ്ങൾ ഏതൊക്കെ?',
                correctAnswers: [2, 3, 4, 5],
            },
            {
                id: 3,
                question: 'ഒന്നാം ലോകമഹായുദ്ധത്തിൽ,ത്രികക്ഷി സൗഹാർദ്ദ സഖ്യത്തിൽ (Triple  Entante ) ഉണ്ടായിരുന്ന രാജ്യങ്ങൾ?',
                correctAnswers: [2, 3, 4],
            },
            {
                id: 4,
                question: '1904 ലെ ഒരു രഹസ്യ ഉടമ്പടി പ്രകാരം, ഒരു രാജ്യം മറ്റൊരു രാജ്യത്തിന് ഈജിപ്ത് വിട്ടുകൊടുത്തു ആഫ്രിക്കൻ രാജ്യമായ മൊറോക്കോ സ്വന്തമാക്കി.  പരാമർശിക്കുന്ന ആ രാജ്യങ്ങൾ ഏതൊക്കെ?',
                correctAnswers: [2, 4],
            },
            {
                id: 5,
                question: 'ഇൻ്റർനാഷണൽ സോളാർ അലയൻസ്, കാലാവസ്ഥ വ്യതിയാനത്തിനെതിരെ ഇന്ത്യയുടേയും മറ്റൊരു രാജ്യത്തിൻ്റെയും കൂട്ടായ ശ്രമത്തിൻെറ ഫലമായി രൂപം കൊണ്ടതാണ്. ഏതാണ് ആ രാജ്യം?',
                correctAnswers: [2],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'ചൈന',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'ഫ്രാൻസ്',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'റഷ്യ',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'UK',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'അമേരിക്ക',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'മംഗോളിയ',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'ജപ്പാൻ',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'ഓസ്‌ട്രേലിയ',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'ഇറാൻ',
                btnVariant: 'violet',
            },
            {
                id: 10,
                label: 'ഉത്തര കൊറിയ',
                btnVariant: 'green',
            },
        ],
        targetAnswerId: 2,
    },
    {
        date: '21/09/2022',
        id: 21,
        questions: [
            {
                id: 1,
                question: 'താഴെ നൽകിയിരിക്കുന്ന സംസ്ഥാനങ്ങളിൽ ഏതാണ് അറബിക്കടലുമായി അതിർത്തി പങ്കിടുന്നത്?',
                correctAnswers: [1, 2, 3, 6, 10],
            },
            {
                id: 2,
                question: 'താഴെ കൊടുത്തിരിക്കുന്ന സംസ്ഥാനങ്ങളിൽ നിന്ന് ഇന്ത്യയിലെ ഉയർന്ന മാനവിക വികസന സൂചികയുള്ള മികച്ച 4 സംസ്ഥാനങ്ങൾ കണ്ടെത്തുക?',
                correctAnswers: [2, 3, 6, 10],
            },
            {
                id: 3,
                question: 'താഴെ പറയുന്ന സംസ്ഥാനങ്ങളിൽ നിന്ന് ഏറ്റവും കൂടുതൽ കാപ്പി ഉത്പാദിപ്പിക്കുന്ന മൂന്ന് ദക്ഷിണേന്ത്യൻ സംസ്ഥാനങ്ങൾ കണ്ടെത്തുക?',
                correctAnswers: [2, 6, 10],
            },
            {
                id: 4,
                question: 'ഭവാനി നദി താഴെപ്പറയുന്നവയിൽ ഏത് സംസ്ഥാനത്തിലൂടെയാണ് ഒഴുകുന്നത്?',
                correctAnswers: [2, 6],
            },
            {
                id: 5,
                question: 'ഇന്ത്യയിൽ ഏറ്റവും കൂടുതൽ സാക്ഷരതാ നിരക്ക് ഉള്ള സംസ്ഥാനം?',
                correctAnswers: [6],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'ഗുജറാത്ത്',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'തമിഴ്‌നാട്',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'മഹാരാഷ്ട്ര',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'രാജസ്ഥാൻ',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'ആന്ധ്രാപ്രദേശ്',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'കേരളം',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'ആസാം',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'ഒഡിഷ',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'പശ്ചിമബംഗാൾ',
                btnVariant: 'violet',
            },
            {
                id: 10,
                label: 'കർണാടക',
                btnVariant: 'green',
            },
        ],
        targetAnswerId: 6,
    },
    {
        date: '22/09/2022',
        id: 22,
        questions: [
            {
                id: 1,
                question: 'താഴെ നൽകിയിരിക്കുന്ന നദികളിൽ ഏതാണ് ഉപദ്വീപ് നദികൾ?',
                correctAnswers: [1, 2, 4, 6, 8],
            },
            {
                id: 2,
                question: 'താഴെ നൽകിയിരിക്കുന്ന നദികളിൽ ഏതാണ് ബംഗാൾ ഉൾക്കടലിലേക്ക് ഒഴുകുന്നത്?',
                correctAnswers: [1, 2, 4, 6],
            },
            {
                id: 3,
                question: 'താഴെ നൽകിയിരിക്കുന്ന നദികളിൽ ഏതാണ് പശ്ചിമഘട്ടത്തിൽ നിന്ന് ഉത്ഭവിക്കുന്നത്?',
                correctAnswers: [1, 2, 6],
            },
            {
                id: 4,
                question: 'താഴെ കൊടുത്തിരിക്കുന്ന നദികളിൽ ഏതൊക്കെ നദികൾക്കിടയിലാണ് കൊല്ലേരു തടാകം സ്ഥിതി ചെയ്യുന്നത്?',
                correctAnswers: [1, 2],
            },
            {
                id: 5,
                question: 'താഴെ നൽകിയിരിക്കുന്ന നദികളിൽ നിന്ന് ഏത് നദിയാണ് ദക്ഷിണ ഗംഗ എന്നറിയപ്പെടുന്നത്?',
                correctAnswers: [1],
            },
        ],
        answerKeys: [
            {
                id: 1,
                label: 'ഗോദാവരി',
                btnVariant: 'violet',
            },
            {
                id: 2,
                label: 'കൃഷ്ണ',
                btnVariant: 'green',
            },
            {
                id: 3,
                label: 'ഭഗീരഥി',
                btnVariant: 'blue',
            },
            {
                id: 4,
                label: 'മഹാനദി',
                btnVariant: 'yellow',
            },
            {
                id: 5,
                label: 'അളകനന്ദ',
                btnVariant: 'violet',
            },
            {
                id: 6,
                label: 'കാവേരി',
                btnVariant: 'green',
            },
            {
                id: 7,
                label: 'ചെനാബ്',
                btnVariant: 'blue',
            },
            {
                id: 8,
                label: 'നർമദ',
                btnVariant: 'yellow',
            },
            {
                id: 9,
                label: 'സിന്ധു',
                btnVariant: 'violet',
            },
            {
                id: 10,
                label: 'ബീസ്',
                btnVariant: 'green',
            },
        ],
        targetAnswerId: 1,
    },
]

// A mock function to mimic actual API
export function getTodaysQuiz() {
    return new Promise<{ data: Quiz.RootObject }>((resolve, reject) => {
        return setTimeout(() => {
            const today = format(new Date(), 'dd/MM/yyyy')
            const quiz = quizzes.find((questionSet) => questionSet.date === today)

            if (quiz) {
                resolve({ data: quiz })
            } else {
                reject({ error: 'No quiz for today, comeback later' })
            }
        }, 0)
    }

    );
}
