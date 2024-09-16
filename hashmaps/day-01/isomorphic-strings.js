// 205. Isomorphic Strings

const isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sRef = {};
    let tRef = {};

    for (let i = 0; i < s.length; i++) {
        if (sRef[s[i]] && sRef[s[i]] !== t[i]) {
            return false;
        }

        if (tRef[t[i]] && tRef[t[i]] !== s[i]) {
            return false;
        }

        sRef[s[i]] = t[i];
        tRef[t[i]] = s[i];
    }

    return true;
};
