define("month.handlebars", [ "gallery/handlebars/1.0.2/runtime" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 4, ">= 1.0.0" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        var buffer = "", stack1, self = this, functionType = "function", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing;
        function program1(depth0, data) {
            var buffer = "", stack1;
            buffer += '\n<ul class="ui-calendar-month-column">\n    ';
            stack1 = helpers.each.call(depth0, depth0, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += "\n</ul>\n";
            return buffer;
        }
        function program2(depth0, data) {
            var buffer = "", stack1, helper, options;
            buffer += '\n    <li class="';
            stack1 = helpers.unless.call(depth0, depth0 && depth0.available, {
                hash: {},
                inverse: self.noop,
                fn: self.program(3, program3, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1;
            }
            buffer += '" data-role="month" data-value="';
            if (helper = helpers.value) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                });
            } else {
                helper = depth0 && depth0.value;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper;
            }
            buffer += escapeExpression(stack1) + '">' + escapeExpression((helper = helpers._ || depth0 && depth0._, 
            options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.label, options) : helperMissing.call(depth0, "_", depth0 && depth0.label, options))) + "</li>\n    ";
            return buffer;
        }
        function program3(depth0, data) {
            return "disabled-element";
        }
        buffer += '<div class="ui-calendar-month">\n';
        stack1 = helpers.each.call(depth0, depth0 && depth0.items, {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += "\n</div>\n";
        return buffer;
    });
});