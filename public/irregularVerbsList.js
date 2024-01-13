const irregularVerbsList = [
    { verb: 'cut', simple_past: 'cut', past_perfect: 'cut' },
    { verb: 'beat', simple_past: 'beat', past_perfect: 'beaten' },
    { verb: 'steal', simple_past: 'stole', past_perfect: 'stolen' },
    { verb: 'stick', simple_past: 'stuck', past_perfect: 'stuck' },
    { verb: 'sing', simple_past: 'sang', past_perfect: 'sung' },
    { verb: 'swim', simple_past: 'swam', past_perfect: 'swum' },
    { verb: 'run', simple_past: 'ran', past_perfect: 'run' },
    { verb: 'write', simple_past: 'wrote', past_perfect: 'written' },
    { verb: 'speak', simple_past: 'spoke', past_perfect: 'spoken' },
    { verb: 'drink', simple_past: 'drank', past_perfect: 'drunk' },
    { verb: 'drive', simple_past: 'drove', past_perfect: 'driven' },
    { verb: 'fly', simple_past: 'flew', past_perfect: 'flown' },
    { verb: 'eat', simple_past: 'ate', past_perfect: 'eaten' },
    { verb: 'fall', simple_past: 'fell', past_perfect: 'fallen' },
    { verb: 'find', simple_past: 'found', past_perfect: 'found' },
    { verb: 'give', simple_past: 'gave', past_perfect: 'given' },
    { verb: 'go', simple_past: 'went', past_perfect: 'gone' },
    { verb: 'begin', simple_past: 'began', past_perfect: 'begun' },
    { verb: 'break', simple_past: 'broke', past_perfect: 'broken' },
    { verb: 'choose', simple_past: 'chose', past_perfect: 'chosen' },
    { verb: 'do', simple_past: 'did', past_perfect: 'done' },
    { verb: 'draw', simple_past: 'drew', past_perfect: 'drawn' },
    { verb: 'freeze', simple_past: 'froze', past_perfect: 'frozen' },
    { verb: 'forgive', simple_past: 'forgave', past_perfect: 'forgiven' },
    { verb: 'hide', simple_past: 'hid', past_perfect: 'hidden' },
    { verb: 'wear', simple_past: 'wore', past_perfect: 'worn' },
    { verb: 'catch', simple_past: 'caught', past_perfect: 'caught' },
    { verb: 'teach', simple_past: 'taught', past_perfect: 'taught' },
    { verb: 'lay', simple_past: 'laid', past_perfect: 'laid' },
    { verb: 'dream', simple_past: 'dreamt', past_perfect: 'dreamt' },
    { verb: 'build', simple_past: 'built', past_perfect: 'built' },
    { verb: 'choose', simple_past: 'chose', past_perfect: 'chosen' },
    { verb: 'lead', simple_past: 'led', past_perfect: 'led' },
    { verb: 'fight', simple_past: 'fought', past_perfect: 'fought' },
    { verb: 'buy', simple_past: 'bought', past_perfect: 'bought' },
    { verb: 'send', simple_past: 'sent', past_perfect: 'sent' },
    { verb: 'meet', simple_past: 'met', past_perfect: 'met' },
    { verb: 'read', simple_past: 'read', past_perfect: 'read' },
    { verb: 'stand', simple_past: 'stood', past_perfect: 'stood' },
    { verb: 'hold', simple_past: 'held', past_perfect: 'held' },
    { verb: 'grow', simple_past: 'grew', past_perfect: 'grown' },
    { verb: 'shoot', simple_past: 'shot', past_perfect: 'shot' },
    { verb: 'pay', simple_past: 'paid', past_perfect: 'paid' },
    { verb: 'choose', simple_past: 'chose', past_perfect: 'chosen' },
    { verb: 'hit', simple_past: 'hit', past_perfect: 'hit' },
    { verb: 'shine', simple_past: 'shone', past_perfect: 'shone' },
    { verb: 'spend', simple_past: 'spent', past_perfect: 'spent' },
    { verb: 'weep', simple_past: 'wept', past_perfect: 'wept' },
    { verb: 'broadcast', simple_past: 'broadcast', past_perfect: 'broadcast' },
    { verb: 'build', simple_past: 'built', past_perfect: 'built' },
    { verb: 'weep', simple_past: 'wept', past_perfect: 'wept' },
    { verb: 'prove', simple_past: 'proved', past_perfect: 'proven' },
    { verb: 'feel', simple_past: 'felt', past_perfect: 'felt' },
    { verb: 'throw', simple_past: 'threw', past_perfect: 'thrown' },
    { verb: 'swing', simple_past: 'swung', past_perfect: 'swung' },
    { verb: 'feed', simple_past: 'fed', past_perfect: 'fed' },
    { verb: 'understand', simple_past: 'understood', past_perfect: 'understood' },
    { verb: 'slide', simple_past: 'slid', past_perfect: 'slid' },
    { verb: 'bind', simple_past: 'bound', past_perfect: 'bound' },
    { verb: 'forecast', simple_past: 'forecast', past_perfect: 'forecast' },
    { verb: 'shut', simple_past: 'shut', past_perfect: 'shut' },
    { verb: 'hear', simple_past: 'heard', past_perfect: 'heard' },
    { verb: 'ring', simple_past: 'rang', past_perfect: 'rung' },
    { verb: 'bet', simple_past: 'bet', past_perfect: 'bet' },
    { verb: 'wake', simple_past: 'woke', past_perfect: 'woken' },
    { verb: 'broadcast', simple_past: 'broadcast', past_perfect: 'broadcast' },
    { verb: 'hide', simple_past: 'hid', past_perfect: 'hidden' },
    { verb: 'thrive', simple_past: 'throve', past_perfect: 'thriven' },
    { verb: 'spread', simple_past: 'spread', past_perfect: 'spread' },
    { verb: 'swell', simple_past: 'swelled', past_perfect: 'swollen' },
    { verb: 'foresee', simple_past: 'foresaw', past_perfect: 'foreseen' },
    { verb: 'stride', simple_past: 'strode', past_perfect: 'stridden' },
    { verb: 'overcome', simple_past: 'overcame', past_perfect: 'overcome' },
    { verb: 'spring', simple_past: 'sprang', past_perfect: 'sprung' },
    { verb: 'cling', simple_past: 'clung', past_perfect: 'clung' },
    { verb: 'grind', simple_past: 'ground', past_perfect: 'ground' },
    { verb: 'spin', simple_past: 'spun', past_perfect: 'spun' },
    { verb: 'forecast', simple_past: 'forecast', past_perfect: 'forecast' },
    { verb: 'bet', simple_past: 'bet', past_perfect: 'bet' },
    { verb: 'wake', simple_past: 'woke', past_perfect: 'woken' },
    { verb: 'sweep', simple_past: 'swept', past_perfect: 'swept' },
    { verb: 'upset', simple_past: 'upset', past_perfect: 'upset' },
    { verb: 'broadcast', simple_past: 'broadcast', past_perfect: 'broadcast' },
    { verb: 'withdraw', simple_past: 'withdrew', past_perfect: 'withdrawn' },
    { verb: 'sow', simple_past: 'sowed', past_perfect: 'sown' },
];

export default irregularVerbsList;