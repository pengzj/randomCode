    function createUniqueCodeList(index, count) {
        var index = index || 0;
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var length = chars.length;
        //5位前缀 Math.pow(36,5) = 60466176 次数内不重复

        var pad = function (num, n) {
            var len = num.toString().length;
            while (len < n) {
                num = "0" + num;
                len++;
            }
            return num;
        };

        bitStr = index.toString(36);
        bitStr = pad(bitStr, 5);
        var prefix = '';
        var random = Math.round(Math.random() * 10000 + 1);
        for (j = 0; j < bitStr.length; j++) {
            prefix += chars[(parseInt(bitStr[j], 36) + j * random) % length];
        }

        //5为随机码
        var i, j;
        var randList = [], tempArray = [];
        for (j = 0; j < length; j++) {
            tempArray.push(j);
        }
        for (i = 0; i < 5; i++) {
            tempArray.sort(function () {
                return Math.random() - 0.5
            });
            var arrayData = tempArray.slice(0);
            randList.push(arrayData);
        }

        var suffix, stringList = [], bitStr;
        for (i = 0; i < count; i++) {
            suffix = '';
            //转为36进制
            bitStr = i.toString(36);
            bitStr = pad(bitStr, randList.length);
            var random = Math.round(Math.random() * 10000 + 1);
            for (j = 0; j < bitStr.length; j++) {
                suffix += chars[(parseInt(bitStr[j], 36) + j * random) % length];
            }
            stringList.push(prefix + suffix);
        }
        return stringList;
    }
