!(function a(s, o, l) {
  function u(t, e) {
    if (!o[t]) {
      if (!s[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (c) return c(t, !0);
        var i = new Error("Cannot find module '" + t + "'");
        throw ((i.code = "MODULE_NOT_FOUND"), i);
      }
      var r = (o[t] = { exports: {} });
      s[t][0].call(
        r.exports,
        function (e) {
          return u(s[t][1][e] || e);
        },
        r,
        r.exports,
        a,
        s,
        o,
        l
      );
    }
    return o[t].exports;
  }
  for (
    var c = "function" == typeof require && require, e = 0;
    e < l.length;
    e++
  )
    u(l[e]);
  return u;
})(
  {
    1: [
      function (e, t, n) {
        var i;
        (i = function (A, N) {
          function M() {
            return new Date(Date.UTC.apply(Date, arguments));
          }
          function j() {
            var e = new Date();
            return M(e.getFullYear(), e.getMonth(), e.getDate());
          }
          function a(e, t) {
            return (
              e.getUTCFullYear() === t.getUTCFullYear() &&
              e.getUTCMonth() === t.getUTCMonth() &&
              e.getUTCDate() === t.getUTCDate()
            );
          }
          function e(e, t) {
            return function () {
              return (
                t !== N && A.fn.datepicker.deprecated(t),
                this[e].apply(this, arguments)
              );
            };
          }
          var t,
            n =
              ((t = {
                get: function (e) {
                  return this.slice(e)[0];
                },
                contains: function (e) {
                  for (
                    var t = e && e.valueOf(), n = 0, i = this.length;
                    n < i;
                    n++
                  )
                    if (
                      0 <= this[n].valueOf() - t &&
                      this[n].valueOf() - t < 864e5
                    )
                      return n;
                  return -1;
                },
                remove: function (e) {
                  this.splice(e, 1);
                },
                replace: function (e) {
                  e &&
                    (A.isArray(e) || (e = [e]),
                    this.clear(),
                    this.push.apply(this, e));
                },
                clear: function () {
                  this.length = 0;
                },
                copy: function () {
                  var e = new n();
                  return e.replace(this), e;
                },
              }),
              function () {
                var e = [];
                return e.push.apply(e, arguments), A.extend(e, t), e;
              }),
            x = function (e, t) {
              A.data(e, "datepicker", this),
                (this._events = []),
                (this._secondaryEvents = []),
                this._process_options(t),
                (this.dates = new n()),
                (this.viewDate = this.o.defaultViewDate),
                (this.focusDate = null),
                (this.element = A(e)),
                (this.isInput = this.element.is("input")),
                (this.inputField = this.isInput
                  ? this.element
                  : this.element.find("input")),
                (this.component =
                  !!this.element.hasClass("date") &&
                  this.element.find(
                    ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"
                  )),
                this.component &&
                  0 === this.component.length &&
                  (this.component = !1),
                (this.isInline = !this.component && this.element.is("div")),
                (this.picker = A(q.template)),
                this._check_template(this.o.templates.leftArrow) &&
                  this.picker.find(".prev").html(this.o.templates.leftArrow),
                this._check_template(this.o.templates.rightArrow) &&
                  this.picker.find(".next").html(this.o.templates.rightArrow),
                this._buildEvents(),
                this._attachEvents(),
                this.isInline
                  ? this.picker
                      .addClass("datepicker-inline")
                      .appendTo(this.element)
                  : this.picker.addClass("datepicker-dropdown dropdown-menu"),
                this.o.rtl && this.picker.addClass("datepicker-rtl"),
                this.o.calendarWeeks &&
                  this.picker
                    .find(
                      ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
                    )
                    .attr("colspan", function (e, t) {
                      return Number(t) + 1;
                    }),
                this._process_options({
                  startDate: this._o.startDate,
                  endDate: this._o.endDate,
                  daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                  daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                  datesDisabled: this.o.datesDisabled,
                }),
                (this._allow_update = !1),
                this.setViewMode(this.o.startView),
                (this._allow_update = !0),
                this.fillDow(),
                this.fillMonths(),
                this.update(),
                this.isInline && this.show();
            };
          x.prototype = {
            constructor: x,
            _resolveViewName: function (n) {
              return (
                A.each(q.viewModes, function (e, t) {
                  if (n === e || -1 !== A.inArray(n, t.names))
                    return (n = e), !1;
                }),
                n
              );
            },
            _resolveDaysOfWeek: function (e) {
              return A.isArray(e) || (e = e.split(/[,\s]*/)), A.map(e, Number);
            },
            _check_template: function (e) {
              try {
                return (
                  e !== N &&
                  "" !== e &&
                  ((e.match(/[<>]/g) || []).length <= 0 || 0 < A(e).length)
                );
              } catch (e) {
                return !1;
              }
            },
            _process_options: function (e) {
              this._o = A.extend({}, this._o, e);
              var t = (this.o = A.extend({}, this._o)),
                n = t.language;
              _[n] || ((n = n.split("-")[0]), _[n] || (n = c.language)),
                (t.language = n),
                (t.startView = this._resolveViewName(t.startView)),
                (t.minViewMode = this._resolveViewName(t.minViewMode)),
                (t.maxViewMode = this._resolveViewName(t.maxViewMode)),
                (t.startView = Math.max(
                  this.o.minViewMode,
                  Math.min(this.o.maxViewMode, t.startView)
                )),
                !0 !== t.multidate &&
                  ((t.multidate = Number(t.multidate) || !1),
                  !1 !== t.multidate &&
                    (t.multidate = Math.max(0, t.multidate))),
                (t.multidateSeparator = String(t.multidateSeparator)),
                (t.weekStart %= 7),
                (t.weekEnd = (t.weekStart + 6) % 7);
              var i = q.parseFormat(t.format);
              t.startDate !== -1 / 0 &&
                (t.startDate
                  ? t.startDate instanceof Date
                    ? (t.startDate = this._local_to_utc(
                        this._zero_time(t.startDate)
                      ))
                    : (t.startDate = q.parseDate(
                        t.startDate,
                        i,
                        t.language,
                        t.assumeNearbyYear
                      ))
                  : (t.startDate = -1 / 0)),
                t.endDate !== 1 / 0 &&
                  (t.endDate
                    ? t.endDate instanceof Date
                      ? (t.endDate = this._local_to_utc(
                          this._zero_time(t.endDate)
                        ))
                      : (t.endDate = q.parseDate(
                          t.endDate,
                          i,
                          t.language,
                          t.assumeNearbyYear
                        ))
                    : (t.endDate = 1 / 0)),
                (t.daysOfWeekDisabled = this._resolveDaysOfWeek(
                  t.daysOfWeekDisabled || []
                )),
                (t.daysOfWeekHighlighted = this._resolveDaysOfWeek(
                  t.daysOfWeekHighlighted || []
                )),
                (t.datesDisabled = t.datesDisabled || []),
                A.isArray(t.datesDisabled) ||
                  (t.datesDisabled = t.datesDisabled.split(",")),
                (t.datesDisabled = A.map(t.datesDisabled, function (e) {
                  return q.parseDate(e, i, t.language, t.assumeNearbyYear);
                }));
              var r = String(t.orientation).toLowerCase().split(/\s+/g),
                a = t.orientation.toLowerCase();
              if (
                ((r = A.grep(r, function (e) {
                  return /^auto|left|right|top|bottom$/.test(e);
                })),
                (t.orientation = { x: "auto", y: "auto" }),
                a && "auto" !== a)
              )
                if (1 === r.length)
                  switch (r[0]) {
                    case "top":
                    case "bottom":
                      t.orientation.y = r[0];
                      break;
                    case "left":
                    case "right":
                      t.orientation.x = r[0];
                  }
                else
                  (a = A.grep(r, function (e) {
                    return /^left|right$/.test(e);
                  })),
                    (t.orientation.x = a[0] || "auto"),
                    (a = A.grep(r, function (e) {
                      return /^top|bottom$/.test(e);
                    })),
                    (t.orientation.y = a[0] || "auto");
              else;
              if (
                t.defaultViewDate instanceof Date ||
                "string" == typeof t.defaultViewDate
              )
                t.defaultViewDate = q.parseDate(
                  t.defaultViewDate,
                  i,
                  t.language,
                  t.assumeNearbyYear
                );
              else if (t.defaultViewDate) {
                var s = t.defaultViewDate.year || new Date().getFullYear(),
                  o = t.defaultViewDate.month || 0,
                  l = t.defaultViewDate.day || 1;
                t.defaultViewDate = M(s, o, l);
              } else t.defaultViewDate = j();
            },
            _applyEvents: function (e) {
              for (var t, n, i, r = 0; r < e.length; r++)
                (t = e[r][0]),
                  2 === e[r].length
                    ? ((n = N), (i = e[r][1]))
                    : 3 === e[r].length && ((n = e[r][1]), (i = e[r][2])),
                  t.on(i, n);
            },
            _unapplyEvents: function (e) {
              for (var t, n, i, r = 0; r < e.length; r++)
                (t = e[r][0]),
                  2 === e[r].length
                    ? ((i = N), (n = e[r][1]))
                    : 3 === e[r].length && ((i = e[r][1]), (n = e[r][2])),
                  t.off(n, i);
            },
            _buildEvents: function () {
              var e = {
                keyup: A.proxy(function (e) {
                  -1 ===
                    A.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
                    this.update();
                }, this),
                keydown: A.proxy(this.keydown, this),
                paste: A.proxy(this.paste, this),
              };
              !0 === this.o.showOnFocus && (e.focus = A.proxy(this.show, this)),
                this.isInput
                  ? (this._events = [[this.element, e]])
                  : this.component && this.inputField.length
                  ? (this._events = [
                      [this.inputField, e],
                      [this.component, { click: A.proxy(this.show, this) }],
                    ])
                  : (this._events = [
                      [
                        this.element,
                        {
                          click: A.proxy(this.show, this),
                          keydown: A.proxy(this.keydown, this),
                        },
                      ],
                    ]),
                this._events.push(
                  [
                    this.element,
                    "*",
                    {
                      blur: A.proxy(function (e) {
                        this._focused_from = e.target;
                      }, this),
                    },
                  ],
                  [
                    this.element,
                    {
                      blur: A.proxy(function (e) {
                        this._focused_from = e.target;
                      }, this),
                    },
                  ]
                ),
                this.o.immediateUpdates &&
                  this._events.push([
                    this.element,
                    {
                      "changeYear changeMonth": A.proxy(function (e) {
                        this.update(e.date);
                      }, this),
                    },
                  ]),
                (this._secondaryEvents = [
                  [this.picker, { click: A.proxy(this.click, this) }],
                  [
                    this.picker,
                    ".prev, .next",
                    { click: A.proxy(this.navArrowsClick, this) },
                  ],
                  [
                    this.picker,
                    ".day:not(.disabled)",
                    { click: A.proxy(this.dayCellClick, this) },
                  ],
                  [A(window), { resize: A.proxy(this.place, this) }],
                  [
                    A(document),
                    {
                      "mousedown touchstart": A.proxy(function (e) {
                        this.element.is(e.target) ||
                          this.element.find(e.target).length ||
                          this.picker.is(e.target) ||
                          this.picker.find(e.target).length ||
                          this.isInline ||
                          this.hide();
                      }, this),
                    },
                  ],
                ]);
            },
            _attachEvents: function () {
              this._detachEvents(), this._applyEvents(this._events);
            },
            _detachEvents: function () {
              this._unapplyEvents(this._events);
            },
            _attachSecondaryEvents: function () {
              this._detachSecondaryEvents(),
                this._applyEvents(this._secondaryEvents);
            },
            _detachSecondaryEvents: function () {
              this._unapplyEvents(this._secondaryEvents);
            },
            _trigger: function (e, t) {
              var n = t || this.dates.get(-1),
                i = this._utc_to_local(n);
              this.element.trigger({
                type: e,
                date: i,
                viewMode: this.viewMode,
                dates: A.map(this.dates, this._utc_to_local),
                format: A.proxy(function (e, t) {
                  0 === arguments.length
                    ? ((e = this.dates.length - 1), (t = this.o.format))
                    : "string" == typeof e &&
                      ((t = e), (e = this.dates.length - 1)),
                    (t = t || this.o.format);
                  var n = this.dates.get(e);
                  return q.formatDate(n, t, this.o.language);
                }, this),
              });
            },
            show: function () {
              if (
                !(
                  this.inputField.is(":disabled") ||
                  (this.inputField.prop("readonly") &&
                    !1 === this.o.enableOnReadonly)
                )
              )
                return (
                  this.isInline || this.picker.appendTo(this.o.container),
                  this.place(),
                  this.picker.show(),
                  this._attachSecondaryEvents(),
                  this._trigger("show"),
                  (window.navigator.msMaxTouchPoints ||
                    "ontouchstart" in document) &&
                    this.o.disableTouchKeyboard &&
                    A(this.element).blur(),
                  this
                );
            },
            hide: function () {
              return (
                this.isInline ||
                  !this.picker.is(":visible") ||
                  ((this.focusDate = null),
                  this.picker.hide().detach(),
                  this._detachSecondaryEvents(),
                  this.setViewMode(this.o.startView),
                  this.o.forceParse && this.inputField.val() && this.setValue(),
                  this._trigger("hide")),
                this
              );
            },
            destroy: function () {
              return (
                this.hide(),
                this._detachEvents(),
                this._detachSecondaryEvents(),
                this.picker.remove(),
                delete this.element.data().datepicker,
                this.isInput || delete this.element.data().date,
                this
              );
            },
            paste: function (e) {
              var t;
              if (
                e.originalEvent.clipboardData &&
                e.originalEvent.clipboardData.types &&
                -1 !==
                  A.inArray("text/plain", e.originalEvent.clipboardData.types)
              )
                t = e.originalEvent.clipboardData.getData("text/plain");
              else {
                if (!window.clipboardData) return;
                t = window.clipboardData.getData("Text");
              }
              this.setDate(t), this.update(), e.preventDefault();
            },
            _utc_to_local: function (e) {
              if (!e) return e;
              var t = new Date(e.getTime() + 6e4 * e.getTimezoneOffset());
              return (
                t.getTimezoneOffset() !== e.getTimezoneOffset() &&
                  (t = new Date(e.getTime() + 6e4 * t.getTimezoneOffset())),
                t
              );
            },
            _local_to_utc: function (e) {
              return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset());
            },
            _zero_time: function (e) {
              return e && new Date(e.getFullYear(), e.getMonth(), e.getDate());
            },
            _zero_utc_time: function (e) {
              return (
                e && M(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
              );
            },
            getDates: function () {
              return A.map(this.dates, this._utc_to_local);
            },
            getUTCDates: function () {
              return A.map(this.dates, function (e) {
                return new Date(e);
              });
            },
            getDate: function () {
              return this._utc_to_local(this.getUTCDate());
            },
            getUTCDate: function () {
              var e = this.dates.get(-1);
              return e !== N ? new Date(e) : null;
            },
            clearDates: function () {
              this.inputField.val(""),
                this.update(),
                this._trigger("changeDate"),
                this.o.autoclose && this.hide();
            },
            setDates: function () {
              var e = A.isArray(arguments[0]) ? arguments[0] : arguments;
              return (
                this.update.apply(this, e),
                this._trigger("changeDate"),
                this.setValue(),
                this
              );
            },
            setUTCDates: function () {
              var e = A.isArray(arguments[0]) ? arguments[0] : arguments;
              return (
                this.setDates.apply(this, A.map(e, this._utc_to_local)), this
              );
            },
            setDate: e("setDates"),
            setUTCDate: e("setUTCDates"),
            remove: e(
              "destroy",
              "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
            ),
            setValue: function () {
              var e = this.getFormattedDate();
              return this.inputField.val(e), this;
            },
            getFormattedDate: function (t) {
              t === N && (t = this.o.format);
              var n = this.o.language;
              return A.map(this.dates, function (e) {
                return q.formatDate(e, t, n);
              }).join(this.o.multidateSeparator);
            },
            getStartDate: function () {
              return this.o.startDate;
            },
            setStartDate: function (e) {
              return (
                this._process_options({ startDate: e }),
                this.update(),
                this.updateNavArrows(),
                this
              );
            },
            getEndDate: function () {
              return this.o.endDate;
            },
            setEndDate: function (e) {
              return (
                this._process_options({ endDate: e }),
                this.update(),
                this.updateNavArrows(),
                this
              );
            },
            setDaysOfWeekDisabled: function (e) {
              return (
                this._process_options({ daysOfWeekDisabled: e }),
                this.update(),
                this
              );
            },
            setDaysOfWeekHighlighted: function (e) {
              return (
                this._process_options({ daysOfWeekHighlighted: e }),
                this.update(),
                this
              );
            },
            setDatesDisabled: function (e) {
              return (
                this._process_options({ datesDisabled: e }), this.update(), this
              );
            },
            place: function () {
              if (this.isInline) return this;
              var e = this.picker.outerWidth(),
                t = this.picker.outerHeight(),
                n = A(this.o.container),
                i = n.width(),
                r =
                  "body" === this.o.container
                    ? A(document).scrollTop()
                    : n.scrollTop(),
                a = n.offset(),
                s = [0];
              this.element.parents().each(function () {
                var e = A(this).css("z-index");
                "auto" !== e && 0 !== Number(e) && s.push(Number(e));
              });
              var o = Math.max.apply(Math, s) + this.o.zIndexOffset,
                l = this.component
                  ? this.component.parent().offset()
                  : this.element.offset(),
                u = this.component
                  ? this.component.outerHeight(!0)
                  : this.element.outerHeight(!1),
                c = this.component
                  ? this.component.outerWidth(!0)
                  : this.element.outerWidth(!1),
                d = l.left - a.left,
                h = l.top - a.top;
              "body" !== this.o.container && (h += r),
                this.picker.removeClass(
                  "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
                ),
                "auto" !== this.o.orientation.x
                  ? (this.picker.addClass(
                      "datepicker-orient-" + this.o.orientation.x
                    ),
                    "right" === this.o.orientation.x && (d -= e - c))
                  : l.left < 0
                  ? (this.picker.addClass("datepicker-orient-left"),
                    (d -= l.left - 10))
                  : i < d + e
                  ? (this.picker.addClass("datepicker-orient-right"),
                    (d += c - e))
                  : this.o.rtl
                  ? this.picker.addClass("datepicker-orient-right")
                  : this.picker.addClass("datepicker-orient-left");
              var f = this.o.orientation.y;
              if (
                ("auto" === f && (f = -r + h - t < 0 ? "bottom" : "top"),
                this.picker.addClass("datepicker-orient-" + f),
                "top" === f
                  ? (h -= t + parseInt(this.picker.css("padding-top")))
                  : (h += u),
                this.o.rtl)
              ) {
                var p = i - (d + c);
                this.picker.css({ top: h, right: p, zIndex: o });
              } else this.picker.css({ top: h, left: d, zIndex: o });
              return this;
            },
            _allow_update: !0,
            update: function () {
              if (!this._allow_update) return this;
              var e = this.dates.copy(),
                n = [],
                t = !1;
              return (
                arguments.length
                  ? (A.each(
                      arguments,
                      A.proxy(function (e, t) {
                        t instanceof Date && (t = this._local_to_utc(t)),
                          n.push(t);
                      }, this)
                    ),
                    (t = !0))
                  : ((n =
                      (n = this.isInput
                        ? this.element.val()
                        : this.element.data("date") || this.inputField.val()) &&
                      this.o.multidate
                        ? n.split(this.o.multidateSeparator)
                        : [n]),
                    delete this.element.data().date),
                (n = A.map(
                  n,
                  A.proxy(function (e) {
                    return q.parseDate(
                      e,
                      this.o.format,
                      this.o.language,
                      this.o.assumeNearbyYear
                    );
                  }, this)
                )),
                (n = A.grep(
                  n,
                  A.proxy(function (e) {
                    return !this.dateWithinRange(e) || !e;
                  }, this),
                  !0
                )),
                this.dates.replace(n),
                this.o.updateViewDate &&
                  (this.dates.length
                    ? (this.viewDate = new Date(this.dates.get(-1)))
                    : this.viewDate < this.o.startDate
                    ? (this.viewDate = new Date(this.o.startDate))
                    : this.viewDate > this.o.endDate
                    ? (this.viewDate = new Date(this.o.endDate))
                    : (this.viewDate = this.o.defaultViewDate)),
                t
                  ? (this.setValue(), this.element.change())
                  : this.dates.length &&
                    String(e) !== String(this.dates) &&
                    t &&
                    (this._trigger("changeDate"), this.element.change()),
                !this.dates.length &&
                  e.length &&
                  (this._trigger("clearDate"), this.element.change()),
                this.fill(),
                this
              );
            },
            fillDow: function () {
              if (this.o.showWeekDays) {
                var e = this.o.weekStart,
                  t = "<tr>";
                for (
                  this.o.calendarWeeks && (t += '<th class="cw">&#160;</th>');
                  e < this.o.weekStart + 7;

                )
                  (t += '<th class="dow'),
                    -1 !== A.inArray(e, this.o.daysOfWeekDisabled) &&
                      (t += " disabled"),
                    (t += '">' + _[this.o.language].daysMin[e++ % 7] + "</th>");
                (t += "</tr>"),
                  this.picker.find(".datepicker-days thead").append(t);
              }
            },
            fillMonths: function () {
              for (
                var e = this._utc_to_local(this.viewDate), t = "", n = 0;
                n < 12;
                n++
              )
                t +=
                  '<span class="month' +
                  (e && e.getMonth() === n ? " focused" : "") +
                  '">' +
                  _[this.o.language].monthsShort[n] +
                  "</span>";
              this.picker.find(".datepicker-months td").html(t);
            },
            setRange: function (e) {
              e && e.length
                ? (this.range = A.map(e, function (e) {
                    return e.valueOf();
                  }))
                : delete this.range,
                this.fill();
            },
            getClassNames: function (e) {
              var t = [],
                n = this.viewDate.getUTCFullYear(),
                i = this.viewDate.getUTCMonth(),
                r = j();
              return (
                e.getUTCFullYear() < n ||
                (e.getUTCFullYear() === n && e.getUTCMonth() < i)
                  ? t.push("old")
                  : (e.getUTCFullYear() > n ||
                      (e.getUTCFullYear() === n && e.getUTCMonth() > i)) &&
                    t.push("new"),
                this.focusDate &&
                  e.valueOf() === this.focusDate.valueOf() &&
                  t.push("focused"),
                this.o.todayHighlight && a(e, r) && t.push("today"),
                -1 !== this.dates.contains(e) && t.push("active"),
                this.dateWithinRange(e) || t.push("disabled"),
                this.dateIsDisabled(e) && t.push("disabled", "disabled-date"),
                -1 !== A.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) &&
                  t.push("highlighted"),
                this.range &&
                  (e > this.range[0] &&
                    e < this.range[this.range.length - 1] &&
                    t.push("range"),
                  -1 !== A.inArray(e.valueOf(), this.range) &&
                    t.push("selected"),
                  e.valueOf() === this.range[0] && t.push("range-start"),
                  e.valueOf() === this.range[this.range.length - 1] &&
                    t.push("range-end")),
                t
              );
            },
            _fill_yearsView: function (e, t, n, i, r, a, s) {
              for (
                var o,
                  l,
                  u,
                  c = "",
                  d = n / 10,
                  h = this.picker.find(e),
                  f = Math.floor(i / n) * n,
                  p = f + 9 * d,
                  g = Math.floor(this.viewDate.getFullYear() / d) * d,
                  m = A.map(this.dates, function (e) {
                    return Math.floor(e.getUTCFullYear() / d) * d;
                  }),
                  v = f - d;
                v <= p + d;
                v += d
              )
                (o = [t]),
                  (l = null),
                  v === f - d ? o.push("old") : v === p + d && o.push("new"),
                  -1 !== A.inArray(v, m) && o.push("active"),
                  (v < r || a < v) && o.push("disabled"),
                  v === g && o.push("focused"),
                  s !== A.noop &&
                    ((u = s(new Date(v, 0, 1))) === N
                      ? (u = {})
                      : "boolean" == typeof u
                      ? (u = { enabled: u })
                      : "string" == typeof u && (u = { classes: u }),
                    !1 === u.enabled && o.push("disabled"),
                    u.classes && (o = o.concat(u.classes.split(/\s+/))),
                    u.tooltip && (l = u.tooltip)),
                  (c +=
                    '<span class="' +
                    o.join(" ") +
                    '"' +
                    (l ? ' title="' + l + '"' : "") +
                    ">" +
                    v +
                    "</span>");
              h.find(".datepicker-switch").text(f + "-" + p),
                h.find("td").html(c);
            },
            fill: function () {
              var e,
                t,
                n = new Date(this.viewDate),
                r = n.getUTCFullYear(),
                i = n.getUTCMonth(),
                a =
                  this.o.startDate !== -1 / 0
                    ? this.o.startDate.getUTCFullYear()
                    : -1 / 0,
                s =
                  this.o.startDate !== -1 / 0
                    ? this.o.startDate.getUTCMonth()
                    : -1 / 0,
                o =
                  this.o.endDate !== 1 / 0
                    ? this.o.endDate.getUTCFullYear()
                    : 1 / 0,
                l =
                  this.o.endDate !== 1 / 0
                    ? this.o.endDate.getUTCMonth()
                    : 1 / 0,
                u = _[this.o.language].today || _.en.today || "",
                c = _[this.o.language].clear || _.en.clear || "",
                d = _[this.o.language].titleFormat || _.en.titleFormat,
                h = j(),
                f =
                  (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) &&
                  h >= this.o.startDate &&
                  h <= this.o.endDate &&
                  !this.weekOfDateIsDisabled(h);
              if (!isNaN(r) && !isNaN(i)) {
                this.picker
                  .find(".datepicker-days .datepicker-switch")
                  .text(q.formatDate(n, d, this.o.language)),
                  this.picker
                    .find("tfoot .today")
                    .text(u)
                    .css("display", f ? "table-cell" : "none"),
                  this.picker
                    .find("tfoot .clear")
                    .text(c)
                    .css(
                      "display",
                      !0 === this.o.clearBtn ? "table-cell" : "none"
                    ),
                  this.picker
                    .find("thead .datepicker-title")
                    .text(this.o.title)
                    .css(
                      "display",
                      "string" == typeof this.o.title && "" !== this.o.title
                        ? "table-cell"
                        : "none"
                    ),
                  this.updateNavArrows(),
                  this.fillMonths();
                var p = M(r, i, 0),
                  g = p.getUTCDate();
                p.setUTCDate(g - ((p.getUTCDay() - this.o.weekStart + 7) % 7));
                var m = new Date(p);
                p.getUTCFullYear() < 100 &&
                  m.setUTCFullYear(p.getUTCFullYear()),
                  m.setUTCDate(m.getUTCDate() + 42),
                  (m = m.valueOf());
                for (var v, y, b = []; p.valueOf() < m; ) {
                  if (
                    (v = p.getUTCDay()) === this.o.weekStart &&
                    (b.push("<tr>"), this.o.calendarWeeks)
                  ) {
                    var w = new Date(
                        +p + ((this.o.weekStart - v - 7) % 7) * 864e5
                      ),
                      x = new Date(
                        Number(w) + ((11 - w.getUTCDay()) % 7) * 864e5
                      ),
                      D = new Date(
                        Number((D = M(x.getUTCFullYear(), 0, 1))) +
                          ((11 - D.getUTCDay()) % 7) * 864e5
                      ),
                      C = (x - D) / 864e5 / 7 + 1;
                    b.push('<td class="cw">' + C + "</td>");
                  }
                  (y = this.getClassNames(p)).push("day");
                  var k = p.getUTCDate();
                  this.o.beforeShowDay !== A.noop &&
                    ((t = this.o.beforeShowDay(this._utc_to_local(p))) === N
                      ? (t = {})
                      : "boolean" == typeof t
                      ? (t = { enabled: t })
                      : "string" == typeof t && (t = { classes: t }),
                    !1 === t.enabled && y.push("disabled"),
                    t.classes && (y = y.concat(t.classes.split(/\s+/))),
                    t.tooltip && (e = t.tooltip),
                    t.content && (k = t.content)),
                    (y = A.isFunction(A.uniqueSort)
                      ? A.uniqueSort(y)
                      : A.unique(y)),
                    b.push(
                      '<td class="' +
                        y.join(" ") +
                        '"' +
                        (e ? ' title="' + e + '"' : "") +
                        ' data-date="' +
                        p.getTime().toString() +
                        '">' +
                        k +
                        "</td>"
                    ),
                    (e = null),
                    v === this.o.weekEnd && b.push("</tr>"),
                    p.setUTCDate(p.getUTCDate() + 1);
                }
                this.picker.find(".datepicker-days tbody").html(b.join(""));
                var T =
                    _[this.o.language].monthsTitle ||
                    _.en.monthsTitle ||
                    "Months",
                  S = this.picker
                    .find(".datepicker-months")
                    .find(".datepicker-switch")
                    .text(this.o.maxViewMode < 2 ? T : r)
                    .end()
                    .find("tbody span")
                    .removeClass("active");
                if (
                  (A.each(this.dates, function (e, t) {
                    t.getUTCFullYear() === r &&
                      S.eq(t.getUTCMonth()).addClass("active");
                  }),
                  (r < a || o < r) && S.addClass("disabled"),
                  r === a && S.slice(0, s).addClass("disabled"),
                  r === o && S.slice(l + 1).addClass("disabled"),
                  this.o.beforeShowMonth !== A.noop)
                ) {
                  var E = this;
                  A.each(S, function (e, t) {
                    var n = new Date(r, e, 1),
                      i = E.o.beforeShowMonth(n);
                    i === N
                      ? (i = {})
                      : "boolean" == typeof i
                      ? (i = { enabled: i })
                      : "string" == typeof i && (i = { classes: i }),
                      !1 !== i.enabled ||
                        A(t).hasClass("disabled") ||
                        A(t).addClass("disabled"),
                      i.classes && A(t).addClass(i.classes),
                      i.tooltip && A(t).prop("title", i.tooltip);
                  });
                }
                this._fill_yearsView(
                  ".datepicker-years",
                  "year",
                  10,
                  r,
                  a,
                  o,
                  this.o.beforeShowYear
                ),
                  this._fill_yearsView(
                    ".datepicker-decades",
                    "decade",
                    100,
                    r,
                    a,
                    o,
                    this.o.beforeShowDecade
                  ),
                  this._fill_yearsView(
                    ".datepicker-centuries",
                    "century",
                    1e3,
                    r,
                    a,
                    o,
                    this.o.beforeShowCentury
                  );
              }
            },
            updateNavArrows: function () {
              if (this._allow_update) {
                var e,
                  t,
                  n = new Date(this.viewDate),
                  i = n.getUTCFullYear(),
                  r = n.getUTCMonth(),
                  a =
                    this.o.startDate !== -1 / 0
                      ? this.o.startDate.getUTCFullYear()
                      : -1 / 0,
                  s =
                    this.o.startDate !== -1 / 0
                      ? this.o.startDate.getUTCMonth()
                      : -1 / 0,
                  o =
                    this.o.endDate !== 1 / 0
                      ? this.o.endDate.getUTCFullYear()
                      : 1 / 0,
                  l =
                    this.o.endDate !== 1 / 0
                      ? this.o.endDate.getUTCMonth()
                      : 1 / 0,
                  u = 1;
                switch (this.viewMode) {
                  case 4:
                    u *= 10;
                  case 3:
                    u *= 10;
                  case 2:
                    u *= 10;
                  case 1:
                    (e = Math.floor(i / u) * u <= a),
                      (t = Math.floor(i / u) * u + u > o);
                    break;
                  case 0:
                    (e = i <= a && r <= s), (t = o <= i && l <= r);
                }
                this.picker.find(".prev").toggleClass("disabled", e),
                  this.picker.find(".next").toggleClass("disabled", t);
              }
            },
            click: function (e) {
              var t, n, i;
              e.preventDefault(),
                e.stopPropagation(),
                (t = A(e.target)).hasClass("datepicker-switch") &&
                  this.viewMode !== this.o.maxViewMode &&
                  this.setViewMode(this.viewMode + 1),
                t.hasClass("today") &&
                  !t.hasClass("day") &&
                  (this.setViewMode(0),
                  this._setDate(
                    j(),
                    "linked" === this.o.todayBtn ? null : "view"
                  )),
                t.hasClass("clear") && this.clearDates(),
                t.hasClass("disabled") ||
                  ((t.hasClass("month") ||
                    t.hasClass("year") ||
                    t.hasClass("decade") ||
                    t.hasClass("century")) &&
                    (this.viewDate.setUTCDate(1),
                    1 === this.viewMode
                      ? ((i = t.parent().find("span").index(t)),
                        (n = this.viewDate.getUTCFullYear()),
                        this.viewDate.setUTCMonth(i))
                      : ((i = 0),
                        (n = Number(t.text())),
                        this.viewDate.setUTCFullYear(n)),
                    this._trigger(
                      q.viewModes[this.viewMode - 1].e,
                      this.viewDate
                    ),
                    this.viewMode === this.o.minViewMode
                      ? this._setDate(M(n, i, 1))
                      : (this.setViewMode(this.viewMode - 1), this.fill()))),
                this.picker.is(":visible") &&
                  this._focused_from &&
                  this._focused_from.focus(),
                delete this._focused_from;
            },
            dayCellClick: function (e) {
              var t = A(e.currentTarget).data("date"),
                n = new Date(t);
              this.o.updateViewDate &&
                (n.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
                  this._trigger("changeYear", this.viewDate),
                n.getUTCMonth() !== this.viewDate.getUTCMonth() &&
                  this._trigger("changeMonth", this.viewDate)),
                this._setDate(n);
            },
            navArrowsClick: function (e) {
              var t = A(e.currentTarget).hasClass("prev") ? -1 : 1;
              0 !== this.viewMode &&
                (t *= 12 * q.viewModes[this.viewMode].navStep),
                (this.viewDate = this.moveMonth(this.viewDate, t)),
                this._trigger(q.viewModes[this.viewMode].e, this.viewDate),
                this.fill();
            },
            _toggle_multidate: function (e) {
              var t = this.dates.contains(e);
              if (
                (e || this.dates.clear(),
                -1 !== t
                  ? (!0 === this.o.multidate ||
                      1 < this.o.multidate ||
                      this.o.toggleActive) &&
                    this.dates.remove(t)
                  : (!1 === this.o.multidate && this.dates.clear(),
                    this.dates.push(e)),
                "number" == typeof this.o.multidate)
              )
                for (; this.dates.length > this.o.multidate; )
                  this.dates.remove(0);
            },
            _setDate: function (e, t) {
              (t && "date" !== t) || this._toggle_multidate(e && new Date(e)),
                ((!t && this.o.updateViewDate) || "view" === t) &&
                  (this.viewDate = e && new Date(e)),
                this.fill(),
                this.setValue(),
                (t && "view" === t) || this._trigger("changeDate"),
                this.inputField.trigger("change"),
                !this.o.autoclose || (t && "date" !== t) || this.hide();
            },
            moveDay: function (e, t) {
              var n = new Date(e);
              return n.setUTCDate(e.getUTCDate() + t), n;
            },
            moveWeek: function (e, t) {
              return this.moveDay(e, 7 * t);
            },
            moveMonth: function (e, t) {
              if (!(n = e) || isNaN(n.getTime())) return this.o.defaultViewDate;
              var n;
              if (!t) return e;
              var i,
                r,
                a = new Date(e.valueOf()),
                s = a.getUTCDate(),
                o = a.getUTCMonth(),
                l = Math.abs(t);
              if (((t = 0 < t ? 1 : -1), 1 === l))
                (r =
                  -1 === t
                    ? function () {
                        return a.getUTCMonth() === o;
                      }
                    : function () {
                        return a.getUTCMonth() !== i;
                      }),
                  (i = o + t),
                  a.setUTCMonth(i),
                  (i = (i + 12) % 12);
              else {
                for (var u = 0; u < l; u++) a = this.moveMonth(a, t);
                (i = a.getUTCMonth()),
                  a.setUTCDate(s),
                  (r = function () {
                    return i !== a.getUTCMonth();
                  });
              }
              for (; r(); ) a.setUTCDate(--s), a.setUTCMonth(i);
              return a;
            },
            moveYear: function (e, t) {
              return this.moveMonth(e, 12 * t);
            },
            moveAvailableDate: function (e, t, n) {
              do {
                if (((e = this[n](e, t)), !this.dateWithinRange(e))) return !1;
                n = "moveDay";
              } while (this.dateIsDisabled(e));
              return e;
            },
            weekOfDateIsDisabled: function (e) {
              return -1 !== A.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled);
            },
            dateIsDisabled: function (t) {
              return (
                this.weekOfDateIsDisabled(t) ||
                0 <
                  A.grep(this.o.datesDisabled, function (e) {
                    return a(t, e);
                  }).length
              );
            },
            dateWithinRange: function (e) {
              return e >= this.o.startDate && e <= this.o.endDate;
            },
            keydown: function (e) {
              if (this.picker.is(":visible")) {
                var t,
                  n,
                  i = !1,
                  r = this.focusDate || this.viewDate;
                switch (e.keyCode) {
                  case 27:
                    this.focusDate
                      ? ((this.focusDate = null),
                        (this.viewDate = this.dates.get(-1) || this.viewDate),
                        this.fill())
                      : this.hide(),
                      e.preventDefault(),
                      e.stopPropagation();
                    break;
                  case 37:
                  case 38:
                  case 39:
                  case 40:
                    if (
                      !this.o.keyboardNavigation ||
                      7 === this.o.daysOfWeekDisabled.length
                    )
                      break;
                    (t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1),
                      0 === this.viewMode
                        ? e.ctrlKey
                          ? (n = this.moveAvailableDate(r, t, "moveYear")) &&
                            this._trigger("changeYear", this.viewDate)
                          : e.shiftKey
                          ? (n = this.moveAvailableDate(r, t, "moveMonth")) &&
                            this._trigger("changeMonth", this.viewDate)
                          : 37 === e.keyCode || 39 === e.keyCode
                          ? (n = this.moveAvailableDate(r, t, "moveDay"))
                          : this.weekOfDateIsDisabled(r) ||
                            (n = this.moveAvailableDate(r, t, "moveWeek"))
                        : 1 === this.viewMode
                        ? ((38 !== e.keyCode && 40 !== e.keyCode) || (t *= 4),
                          (n = this.moveAvailableDate(r, t, "moveMonth")))
                        : 2 === this.viewMode &&
                          ((38 !== e.keyCode && 40 !== e.keyCode) || (t *= 4),
                          (n = this.moveAvailableDate(r, t, "moveYear"))),
                      n &&
                        ((this.focusDate = this.viewDate = n),
                        this.setValue(),
                        this.fill(),
                        e.preventDefault());
                    break;
                  case 13:
                    if (!this.o.forceParse) break;
                    (r = this.focusDate || this.dates.get(-1) || this.viewDate),
                      this.o.keyboardNavigation &&
                        (this._toggle_multidate(r), (i = !0)),
                      (this.focusDate = null),
                      (this.viewDate = this.dates.get(-1) || this.viewDate),
                      this.setValue(),
                      this.fill(),
                      this.picker.is(":visible") &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        this.o.autoclose && this.hide());
                    break;
                  case 9:
                    (this.focusDate = null),
                      (this.viewDate = this.dates.get(-1) || this.viewDate),
                      this.fill(),
                      this.hide();
                }
                i &&
                  (this.dates.length
                    ? this._trigger("changeDate")
                    : this._trigger("clearDate"),
                  this.inputField.trigger("change"));
              } else
                (40 !== e.keyCode && 27 !== e.keyCode) ||
                  (this.show(), e.stopPropagation());
            },
            setViewMode: function (e) {
              (this.viewMode = e),
                this.picker
                  .children("div")
                  .hide()
                  .filter(".datepicker-" + q.viewModes[this.viewMode].clsName)
                  .show(),
                this.updateNavArrows(),
                this._trigger("changeViewMode", new Date(this.viewDate));
            },
          };
          var u = function (e, t) {
            A.data(e, "datepicker", this),
              (this.element = A(e)),
              (this.inputs = A.map(t.inputs, function (e) {
                return e.jquery ? e[0] : e;
              })),
              delete t.inputs,
              (this.keepEmptyValues = t.keepEmptyValues),
              delete t.keepEmptyValues,
              r
                .call(A(this.inputs), t)
                .on("changeDate", A.proxy(this.dateUpdated, this)),
              (this.pickers = A.map(this.inputs, function (e) {
                return A.data(e, "datepicker");
              })),
              this.updateDates();
          };
          u.prototype = {
            updateDates: function () {
              (this.dates = A.map(this.pickers, function (e) {
                return e.getUTCDate();
              })),
                this.updateRanges();
            },
            updateRanges: function () {
              var n = A.map(this.dates, function (e) {
                return e.valueOf();
              });
              A.each(this.pickers, function (e, t) {
                t.setRange(n);
              });
            },
            clearDates: function () {
              A.each(this.pickers, function (e, t) {
                t.clearDates();
              });
            },
            dateUpdated: function (e) {
              if (!this.updating) {
                this.updating = !0;
                var n = A.data(e.target, "datepicker");
                if (n !== N) {
                  var i = n.getUTCDate(),
                    r = this.keepEmptyValues,
                    t = A.inArray(e.target, this.inputs),
                    a = t - 1,
                    s = t + 1,
                    o = this.inputs.length;
                  if (-1 !== t) {
                    if (
                      (A.each(this.pickers, function (e, t) {
                        t.getUTCDate() || (t !== n && r) || t.setUTCDate(i);
                      }),
                      i < this.dates[a])
                    )
                      for (; 0 <= a && i < this.dates[a]; )
                        this.pickers[a--].setUTCDate(i);
                    else if (i > this.dates[s])
                      for (; s < o && i > this.dates[s]; )
                        this.pickers[s++].setUTCDate(i);
                    this.updateDates(), delete this.updating;
                  }
                }
              }
            },
            destroy: function () {
              A.map(this.pickers, function (e) {
                e.destroy();
              }),
                A(this.inputs).off("changeDate", this.dateUpdated),
                delete this.element.data().datepicker;
            },
            remove: e(
              "destroy",
              "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
            ),
          };
          var i = A.fn.datepicker,
            r = function (s) {
              var o,
                l = Array.apply(null, arguments);
              if (
                (l.shift(),
                this.each(function () {
                  var e = A(this),
                    t = e.data("datepicker"),
                    n = "object" == typeof s && s;
                  if (!t) {
                    var i = (function (e, t) {
                        var n = A(e).data(),
                          i = {},
                          r = new RegExp("^" + t.toLowerCase() + "([A-Z])");
                        function a(e, t) {
                          return t.toLowerCase();
                        }
                        for (var s in ((t = new RegExp("^" + t.toLowerCase())),
                        n))
                          t.test(s) && (i[s.replace(r, a)] = n[s]);
                        return i;
                      })(this, "date"),
                      r = (function (e) {
                        var n = {};
                        if (_[e] || ((e = e.split("-")[0]), _[e])) {
                          var i = _[e];
                          return (
                            A.each(d, function (e, t) {
                              t in i && (n[t] = i[t]);
                            }),
                            n
                          );
                        }
                      })(A.extend({}, c, i, n).language),
                      a = A.extend({}, c, r, i, n);
                    (t =
                      e.hasClass("input-daterange") || a.inputs
                        ? (A.extend(a, {
                            inputs: a.inputs || e.find("input").toArray(),
                          }),
                          new u(this, a))
                        : new x(this, a)),
                      e.data("datepicker", t);
                  }
                  "string" == typeof s &&
                    "function" == typeof t[s] &&
                    (o = t[s].apply(t, l));
                }),
                o === N || o instanceof x || o instanceof u)
              )
                return this;
              if (1 < this.length)
                throw new Error(
                  "Using only allowed for the collection of a single element (" +
                    s +
                    " function)"
                );
              return o;
            };
          A.fn.datepicker = r;
          var c = (A.fn.datepicker.defaults = {
              assumeNearbyYear: !1,
              autoclose: !1,
              beforeShowDay: A.noop,
              beforeShowMonth: A.noop,
              beforeShowYear: A.noop,
              beforeShowDecade: A.noop,
              beforeShowCentury: A.noop,
              calendarWeeks: !1,
              clearBtn: !1,
              toggleActive: !1,
              daysOfWeekDisabled: [],
              daysOfWeekHighlighted: [],
              datesDisabled: [],
              endDate: 1 / 0,
              forceParse: !0,
              format: "mm/dd/yyyy",
              keepEmptyValues: !1,
              keyboardNavigation: !0,
              language: "en",
              minViewMode: 0,
              maxViewMode: 4,
              multidate: !1,
              multidateSeparator: ",",
              orientation: "auto",
              rtl: !1,
              startDate: -1 / 0,
              startView: 0,
              todayBtn: !1,
              todayHighlight: !1,
              updateViewDate: !0,
              weekStart: 0,
              disableTouchKeyboard: !1,
              enableOnReadonly: !0,
              showOnFocus: !0,
              zIndexOffset: 10,
              container: "body",
              immediateUpdates: !1,
              title: "",
              templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
              showWeekDays: !0,
            }),
            d = (A.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]);
          A.fn.datepicker.Constructor = x;
          var _ = (A.fn.datepicker.dates = {
              en: {
                days: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                months: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                monthsShort: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                today: "Today",
                clear: "Clear",
                titleFormat: "MM yyyy",
              },
            }),
            q = {
              viewModes: [
                { names: ["days", "month"], clsName: "days", e: "changeMonth" },
                {
                  names: ["months", "year"],
                  clsName: "months",
                  e: "changeYear",
                  navStep: 1,
                },
                {
                  names: ["years", "decade"],
                  clsName: "years",
                  e: "changeDecade",
                  navStep: 10,
                },
                {
                  names: ["decades", "century"],
                  clsName: "decades",
                  e: "changeCentury",
                  navStep: 100,
                },
                {
                  names: ["centuries", "millennium"],
                  clsName: "centuries",
                  e: "changeMillennium",
                  navStep: 1e3,
                },
              ],
              validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
              nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
              parseFormat: function (e) {
                if (
                  "function" == typeof e.toValue &&
                  "function" == typeof e.toDisplay
                )
                  return e;
                var t = e.replace(this.validParts, "\0").split("\0"),
                  n = e.match(this.validParts);
                if (!t || !t.length || !n || 0 === n.length)
                  throw new Error("Invalid date format.");
                return { separators: t, parts: n };
              },
              parseDate: function (e, t, n, r) {
                if (!e) return N;
                if (e instanceof Date) return e;
                if (("string" == typeof t && (t = q.parseFormat(t)), t.toValue))
                  return t.toValue(e, t, n);
                var i,
                  a,
                  s,
                  o,
                  l,
                  u = {
                    d: "moveDay",
                    m: "moveMonth",
                    w: "moveWeek",
                    y: "moveYear",
                  },
                  c = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
                if (
                  (e in c && (e = c[e]),
                  /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(e))
                ) {
                  for (
                    i = e.match(/([\-+]\d+)([dmwy])/gi), e = new Date(), o = 0;
                    o < i.length;
                    o++
                  )
                    (a = i[o].match(/([\-+]\d+)([dmwy])/i)),
                      (s = Number(a[1])),
                      (l = u[a[2].toLowerCase()]),
                      (e = x.prototype[l](e, s));
                  return x.prototype._zero_utc_time(e);
                }
                i = (e && e.match(this.nonpunctuation)) || [];
                var d,
                  h,
                  f = {},
                  p = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                  g = {
                    yyyy: function (e, t) {
                      return e.setUTCFullYear(
                        r
                          ? (!0 === (i = r) && (i = 10),
                            (n = t) < 100 &&
                              (n += 2e3) > new Date().getFullYear() + i &&
                              (n -= 100),
                            n)
                          : t
                      );
                      var n, i;
                    },
                    m: function (e, t) {
                      if (isNaN(e)) return e;
                      for (t -= 1; t < 0; ) t += 12;
                      for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t; )
                        e.setUTCDate(e.getUTCDate() - 1);
                      return e;
                    },
                    d: function (e, t) {
                      return e.setUTCDate(t);
                    },
                  };
                (g.yy = g.yyyy),
                  (g.M = g.MM = g.mm = g.m),
                  (g.dd = g.d),
                  (e = j());
                var m = t.parts.slice();
                function v() {
                  var e = this.slice(0, i[o].length),
                    t = i[o].slice(0, e.length);
                  return e.toLowerCase() === t.toLowerCase();
                }
                if (
                  (i.length !== m.length &&
                    (m = A(m)
                      .filter(function (e, t) {
                        return -1 !== A.inArray(t, p);
                      })
                      .toArray()),
                  i.length === m.length)
                ) {
                  var y, b, w;
                  for (o = 0, y = m.length; o < y; o++) {
                    if (((d = parseInt(i[o], 10)), (a = m[o]), isNaN(d)))
                      switch (a) {
                        case "MM":
                          (h = A(_[n].months).filter(v)),
                            (d = A.inArray(h[0], _[n].months) + 1);
                          break;
                        case "M":
                          (h = A(_[n].monthsShort).filter(v)),
                            (d = A.inArray(h[0], _[n].monthsShort) + 1);
                      }
                    f[a] = d;
                  }
                  for (o = 0; o < p.length; o++)
                    (w = p[o]) in f &&
                      !isNaN(f[w]) &&
                      ((b = new Date(e)), g[w](b, f[w]), isNaN(b) || (e = b));
                }
                return e;
              },
              formatDate: function (e, t, n) {
                if (!e) return "";
                if (
                  ("string" == typeof t && (t = q.parseFormat(t)), t.toDisplay)
                )
                  return t.toDisplay(e, t, n);
                var i = {
                  d: e.getUTCDate(),
                  D: _[n].daysShort[e.getUTCDay()],
                  DD: _[n].days[e.getUTCDay()],
                  m: e.getUTCMonth() + 1,
                  M: _[n].monthsShort[e.getUTCMonth()],
                  MM: _[n].months[e.getUTCMonth()],
                  yy: e.getUTCFullYear().toString().substring(2),
                  yyyy: e.getUTCFullYear(),
                };
                (i.dd = (i.d < 10 ? "0" : "") + i.d),
                  (i.mm = (i.m < 10 ? "0" : "") + i.m),
                  (e = []);
                for (
                  var r = A.extend([], t.separators), a = 0, s = t.parts.length;
                  a <= s;
                  a++
                )
                  r.length && e.push(r.shift()), e.push(i[t.parts[a]]);
                return e.join("");
              },
              headTemplate:
                '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
                c.templates.leftArrow +
                '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
                c.templates.rightArrow +
                "</th></tr></thead>",
              contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
              footTemplate:
                '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
            };
          (q.template =
            '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
            q.headTemplate +
            "<tbody></tbody>" +
            q.footTemplate +
            '</table></div><div class="datepicker-months"><table class="table-condensed">' +
            q.headTemplate +
            q.contTemplate +
            q.footTemplate +
            '</table></div><div class="datepicker-years"><table class="table-condensed">' +
            q.headTemplate +
            q.contTemplate +
            q.footTemplate +
            '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
            q.headTemplate +
            q.contTemplate +
            q.footTemplate +
            '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
            q.headTemplate +
            q.contTemplate +
            q.footTemplate +
            "</table></div></div>"),
            (A.fn.datepicker.DPGlobal = q),
            (A.fn.datepicker.noConflict = function () {
              return (A.fn.datepicker = i), this;
            }),
            (A.fn.datepicker.version = "1.9.0"),
            (A.fn.datepicker.deprecated = function (e) {
              var t = window.console;
              t && t.warn && t.warn("DEPRECATED: " + e);
            }),
            A(document).on(
              "focus.datepicker.data-api click.datepicker.data-api",
              '[data-provide="datepicker"]',
              function (e) {
                var t = A(this);
                t.data("datepicker") || (e.preventDefault(), r.call(t, "show"));
              }
            ),
            A(function () {
              r.call(A('[data-provide="datepicker-inline"]'));
            });
        }),
          "function" == typeof define && define.amd
            ? define(["jquery"], i)
            : i("object" == typeof n ? e("jquery") : jQuery);
      },
      { jquery: 3 },
    ],
    2: [
      function (e, t, n) {
        var i;
        (i = function (c) {
          var n;
          c.extend(c.fn, {
            validate: function (e) {
              if (this.length) {
                var i = c.data(this[0], "validator");
                return (
                  i ||
                  (this.attr("novalidate", "novalidate"),
                  (i = new c.validator(e, this[0])),
                  c.data(this[0], "validator", i),
                  i.settings.onsubmit &&
                    (this.on("click.validate", ":submit", function (e) {
                      (i.submitButton = e.currentTarget),
                        c(this).hasClass("cancel") && (i.cancelSubmit = !0),
                        void 0 !== c(this).attr("formnovalidate") &&
                          (i.cancelSubmit = !0);
                    }),
                    this.on("submit.validate", function (n) {
                      function e() {
                        var e, t;
                        return (
                          i.submitButton &&
                            (i.settings.submitHandler || i.formSubmitted) &&
                            (e = c("<input type='hidden'/>")
                              .attr("name", i.submitButton.name)
                              .val(c(i.submitButton).val())
                              .appendTo(i.currentForm)),
                          !(i.settings.submitHandler && !i.settings.debug) ||
                            ((t = i.settings.submitHandler.call(
                              i,
                              i.currentForm,
                              n
                            )),
                            e && e.remove(),
                            void 0 !== t && t)
                        );
                      }
                      return (
                        i.settings.debug && n.preventDefault(),
                        i.cancelSubmit
                          ? ((i.cancelSubmit = !1), e())
                          : i.form()
                          ? i.pendingRequest
                            ? !(i.formSubmitted = !0)
                            : e()
                          : (i.focusInvalid(), !1)
                      );
                    })),
                  i)
                );
              }
              e &&
                e.debug &&
                window.console &&
                console.warn(
                  "Nothing selected, can't validate, returning nothing."
                );
            },
            valid: function () {
              var e, t, n;
              return (
                c(this[0]).is("form")
                  ? (e = this.validate().form())
                  : ((n = []),
                    (e = !0),
                    (t = c(this[0].form).validate()),
                    this.each(function () {
                      (e = t.element(this) && e) || (n = n.concat(t.errorList));
                    }),
                    (t.errorList = n)),
                e
              );
            },
            rules: function (e, t) {
              var n,
                i,
                r,
                a,
                s,
                o,
                l = this[0],
                u =
                  void 0 !== this.attr("contenteditable") &&
                  "false" !== this.attr("contenteditable");
              if (
                null != l &&
                (!l.form &&
                  u &&
                  ((l.form = this.closest("form")[0]),
                  (l.name = this.attr("name"))),
                null != l.form)
              ) {
                if (e)
                  switch (
                    ((i = (n = c.data(l.form, "validator").settings).rules),
                    (r = c.validator.staticRules(l)),
                    e)
                  ) {
                    case "add":
                      c.extend(r, c.validator.normalizeRule(t)),
                        delete r.messages,
                        (i[l.name] = r),
                        t.messages &&
                          (n.messages[l.name] = c.extend(
                            n.messages[l.name],
                            t.messages
                          ));
                      break;
                    case "remove":
                      return t
                        ? ((o = {}),
                          c.each(t.split(/\s/), function (e, t) {
                            (o[t] = r[t]), delete r[t];
                          }),
                          o)
                        : (delete i[l.name], r);
                  }
                return (
                  (a = c.validator.normalizeRules(
                    c.extend(
                      {},
                      c.validator.classRules(l),
                      c.validator.attributeRules(l),
                      c.validator.dataRules(l),
                      c.validator.staticRules(l)
                    ),
                    l
                  )).required &&
                    ((s = a.required),
                    delete a.required,
                    (a = c.extend({ required: s }, a))),
                  a.remote &&
                    ((s = a.remote),
                    delete a.remote,
                    (a = c.extend(a, { remote: s }))),
                  a
                );
              }
            },
          }),
            c.extend(c.expr.pseudos || c.expr[":"], {
              blank: function (e) {
                return !c.trim("" + c(e).val());
              },
              filled: function (e) {
                var t = c(e).val();
                return null !== t && !!c.trim("" + t);
              },
              unchecked: function (e) {
                return !c(e).prop("checked");
              },
            }),
            (c.validator = function (e, t) {
              (this.settings = c.extend(!0, {}, c.validator.defaults, e)),
                (this.currentForm = t),
                this.init();
            }),
            (c.validator.format = function (n, e) {
              return 1 === arguments.length
                ? function () {
                    var e = c.makeArray(arguments);
                    return e.unshift(n), c.validator.format.apply(this, e);
                  }
                : (void 0 === e ||
                    (2 < arguments.length &&
                      e.constructor !== Array &&
                      (e = c.makeArray(arguments).slice(1)),
                    e.constructor !== Array && (e = [e]),
                    c.each(e, function (e, t) {
                      n = n.replace(
                        new RegExp("\\{" + e + "\\}", "g"),
                        function () {
                          return t;
                        }
                      );
                    })),
                  n);
            }),
            c.extend(c.validator, {
              defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: c([]),
                errorLabelContainer: c([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (e) {
                  (this.lastActive = e),
                    this.settings.focusCleanup &&
                      (this.settings.unhighlight &&
                        this.settings.unhighlight.call(
                          this,
                          e,
                          this.settings.errorClass,
                          this.settings.validClass
                        ),
                      this.hideThese(this.errorsFor(e)));
                },
                onfocusout: function (e) {
                  this.checkable(e) ||
                    (!(e.name in this.submitted) && this.optional(e)) ||
                    this.element(e);
                },
                onkeyup: function (e, t) {
                  (9 === t.which && "" === this.elementValue(e)) ||
                    -1 !==
                      c.inArray(
                        t.keyCode,
                        [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]
                      ) ||
                    ((e.name in this.submitted || e.name in this.invalid) &&
                      this.element(e));
                },
                onclick: function (e) {
                  e.name in this.submitted
                    ? this.element(e)
                    : e.parentNode.name in this.submitted &&
                      this.element(e.parentNode);
                },
                highlight: function (e, t, n) {
                  "radio" === e.type
                    ? this.findByName(e.name).addClass(t).removeClass(n)
                    : c(e).addClass(t).removeClass(n);
                },
                unhighlight: function (e, t, n) {
                  "radio" === e.type
                    ? this.findByName(e.name).removeClass(t).addClass(n)
                    : c(e).removeClass(t).addClass(n);
                },
              },
              setDefaults: function (e) {
                c.extend(c.validator.defaults, e);
              },
              messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: c.validator.format(
                  "Please enter no more than {0} characters."
                ),
                minlength: c.validator.format(
                  "Please enter at least {0} characters."
                ),
                rangelength: c.validator.format(
                  "Please enter a value between {0} and {1} characters long."
                ),
                range: c.validator.format(
                  "Please enter a value between {0} and {1}."
                ),
                max: c.validator.format(
                  "Please enter a value less than or equal to {0}."
                ),
                min: c.validator.format(
                  "Please enter a value greater than or equal to {0}."
                ),
                step: c.validator.format("Please enter a multiple of {0}."),
              },
              autoCreateRanges: !1,
              prototype: {
                init: function () {
                  (this.labelContainer = c(this.settings.errorLabelContainer)),
                    (this.errorContext =
                      (this.labelContainer.length && this.labelContainer) ||
                      c(this.currentForm)),
                    (this.containers = c(this.settings.errorContainer).add(
                      this.settings.errorLabelContainer
                    )),
                    (this.submitted = {}),
                    (this.valueCache = {}),
                    (this.pendingRequest = 0),
                    (this.pending = {}),
                    (this.invalid = {}),
                    this.reset();
                  var n,
                    a = this.currentForm,
                    i = (this.groups = {});
                  function e(e) {
                    var t =
                      void 0 !== c(this).attr("contenteditable") &&
                      "false" !== c(this).attr("contenteditable");
                    if (
                      (!this.form &&
                        t &&
                        ((this.form = c(this).closest("form")[0]),
                        (this.name = c(this).attr("name"))),
                      a === this.form)
                    ) {
                      var n = c.data(this.form, "validator"),
                        i = "on" + e.type.replace(/^validate/, ""),
                        r = n.settings;
                      r[i] && !c(this).is(r.ignore) && r[i].call(n, this, e);
                    }
                  }
                  c.each(this.settings.groups, function (n, e) {
                    "string" == typeof e && (e = e.split(/\s/)),
                      c.each(e, function (e, t) {
                        i[t] = n;
                      });
                  }),
                    (n = this.settings.rules),
                    c.each(n, function (e, t) {
                      n[e] = c.validator.normalizeRule(t);
                    }),
                    c(this.currentForm)
                      .on(
                        "focusin.validate focusout.validate keyup.validate",
                        ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                        e
                      )
                      .on(
                        "click.validate",
                        "select, option, [type='radio'], [type='checkbox']",
                        e
                      ),
                    this.settings.invalidHandler &&
                      c(this.currentForm).on(
                        "invalid-form.validate",
                        this.settings.invalidHandler
                      );
                },
                form: function () {
                  return (
                    this.checkForm(),
                    c.extend(this.submitted, this.errorMap),
                    (this.invalid = c.extend({}, this.errorMap)),
                    this.valid() ||
                      c(this.currentForm).triggerHandler("invalid-form", [
                        this,
                      ]),
                    this.showErrors(),
                    this.valid()
                  );
                },
                checkForm: function () {
                  this.prepareForm();
                  for (
                    var e = 0, t = (this.currentElements = this.elements());
                    t[e];
                    e++
                  )
                    this.check(t[e]);
                  return this.valid();
                },
                element: function (e) {
                  var t,
                    n,
                    i = this.clean(e),
                    r = this.validationTargetFor(i),
                    a = this,
                    s = !0;
                  return (
                    void 0 === r
                      ? delete this.invalid[i.name]
                      : (this.prepareElement(r),
                        (this.currentElements = c(r)),
                        (n = this.groups[r.name]) &&
                          c.each(this.groups, function (e, t) {
                            t === n &&
                              e !== r.name &&
                              (i = a.validationTargetFor(
                                a.clean(a.findByName(e))
                              )) &&
                              i.name in a.invalid &&
                              (a.currentElements.push(i),
                              (s = a.check(i) && s));
                          }),
                        (t = !1 !== this.check(r)),
                        (s = s && t),
                        (this.invalid[r.name] = !t),
                        this.numberOfInvalids() ||
                          (this.toHide = this.toHide.add(this.containers)),
                        this.showErrors(),
                        c(e).attr("aria-invalid", !t)),
                    s
                  );
                },
                showErrors: function (t) {
                  if (t) {
                    var n = this;
                    c.extend(this.errorMap, t),
                      (this.errorList = c.map(this.errorMap, function (e, t) {
                        return { message: e, element: n.findByName(t)[0] };
                      })),
                      (this.successList = c.grep(
                        this.successList,
                        function (e) {
                          return !(e.name in t);
                        }
                      ));
                  }
                  this.settings.showErrors
                    ? this.settings.showErrors.call(
                        this,
                        this.errorMap,
                        this.errorList
                      )
                    : this.defaultShowErrors();
                },
                resetForm: function () {
                  c.fn.resetForm && c(this.currentForm).resetForm(),
                    (this.invalid = {}),
                    (this.submitted = {}),
                    this.prepareForm(),
                    this.hideErrors();
                  var e = this.elements()
                    .removeData("previousValue")
                    .removeAttr("aria-invalid");
                  this.resetElements(e);
                },
                resetElements: function (e) {
                  var t;
                  if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++)
                      this.settings.unhighlight.call(
                        this,
                        e[t],
                        this.settings.errorClass,
                        ""
                      ),
                        this.findByName(e[t].name).removeClass(
                          this.settings.validClass
                        );
                  else
                    e.removeClass(this.settings.errorClass).removeClass(
                      this.settings.validClass
                    );
                },
                numberOfInvalids: function () {
                  return this.objectLength(this.invalid);
                },
                objectLength: function (e) {
                  var t,
                    n = 0;
                  for (t in e)
                    void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                  return n;
                },
                hideErrors: function () {
                  this.hideThese(this.toHide);
                },
                hideThese: function (e) {
                  e.not(this.containers).text(""), this.addWrapper(e).hide();
                },
                valid: function () {
                  return 0 === this.size();
                },
                size: function () {
                  return this.errorList.length;
                },
                focusInvalid: function () {
                  if (this.settings.focusInvalid)
                    try {
                      c(
                        this.findLastActive() ||
                          (this.errorList.length &&
                            this.errorList[0].element) ||
                          []
                      )
                        .filter(":visible")
                        .focus()
                        .trigger("focusin");
                    } catch (e) {}
                },
                findLastActive: function () {
                  var t = this.lastActive;
                  return (
                    t &&
                    1 ===
                      c.grep(this.errorList, function (e) {
                        return e.element.name === t.name;
                      }).length &&
                    t
                  );
                },
                elements: function () {
                  var n = this,
                    i = {};
                  return c(this.currentForm)
                    .find("input, select, textarea, [contenteditable]")
                    .not(":submit, :reset, :image, :disabled")
                    .not(this.settings.ignore)
                    .filter(function () {
                      var e = this.name || c(this).attr("name"),
                        t =
                          void 0 !== c(this).attr("contenteditable") &&
                          "false" !== c(this).attr("contenteditable");
                      return (
                        !e &&
                          n.settings.debug &&
                          window.console &&
                          console.error("%o has no name assigned", this),
                        t &&
                          ((this.form = c(this).closest("form")[0]),
                          (this.name = e)),
                        this.form === n.currentForm &&
                          !(e in i || !n.objectLength(c(this).rules())) &&
                          (i[e] = !0)
                      );
                    });
                },
                clean: function (e) {
                  return c(e)[0];
                },
                errors: function () {
                  var e = this.settings.errorClass.split(" ").join(".");
                  return c(
                    this.settings.errorElement + "." + e,
                    this.errorContext
                  );
                },
                resetInternals: function () {
                  (this.successList = []),
                    (this.errorList = []),
                    (this.errorMap = {}),
                    (this.toShow = c([])),
                    (this.toHide = c([]));
                },
                reset: function () {
                  this.resetInternals(), (this.currentElements = c([]));
                },
                prepareForm: function () {
                  this.reset(),
                    (this.toHide = this.errors().add(this.containers));
                },
                prepareElement: function (e) {
                  this.reset(), (this.toHide = this.errorsFor(e));
                },
                elementValue: function (e) {
                  var t,
                    n,
                    i = c(e),
                    r = e.type,
                    a =
                      void 0 !== i.attr("contenteditable") &&
                      "false" !== i.attr("contenteditable");
                  return "radio" === r || "checkbox" === r
                    ? this.findByName(e.name).filter(":checked").val()
                    : "number" === r && void 0 !== e.validity
                    ? e.validity.badInput
                      ? "NaN"
                      : i.val()
                    : ((t = a ? i.text() : i.val()),
                      "file" === r
                        ? "C:\\fakepath\\" === t.substr(0, 12)
                          ? t.substr(12)
                          : 0 <= (n = t.lastIndexOf("/"))
                          ? t.substr(n + 1)
                          : 0 <= (n = t.lastIndexOf("\\"))
                          ? t.substr(n + 1)
                          : t
                        : "string" == typeof t
                        ? t.replace(/\r/g, "")
                        : t);
                },
                check: function (t) {
                  t = this.validationTargetFor(this.clean(t));
                  var e,
                    n,
                    i,
                    r,
                    a = c(t).rules(),
                    s = c.map(a, function (e, t) {
                      return t;
                    }).length,
                    o = !1,
                    l = this.elementValue(t);
                  for (n in ("function" == typeof a.normalizer
                    ? (r = a.normalizer)
                    : "function" == typeof this.settings.normalizer &&
                      (r = this.settings.normalizer),
                  r && ((l = r.call(t, l)), delete a.normalizer),
                  a)) {
                    i = { method: n, parameters: a[n] };
                    try {
                      if (
                        "dependency-mismatch" ===
                          (e = c.validator.methods[n].call(
                            this,
                            l,
                            t,
                            i.parameters
                          )) &&
                        1 === s
                      ) {
                        o = !0;
                        continue;
                      }
                      if (((o = !1), "pending" === e))
                        return void (this.toHide = this.toHide.not(
                          this.errorsFor(t)
                        ));
                      if (!e) return this.formatAndAdd(t, i), !1;
                    } catch (e) {
                      throw (
                        (this.settings.debug &&
                          window.console &&
                          console.log(
                            "Exception occurred when checking element " +
                              t.id +
                              ", check the '" +
                              i.method +
                              "' method.",
                            e
                          ),
                        e instanceof TypeError &&
                          (e.message +=
                            ".  Exception occurred when checking element " +
                            t.id +
                            ", check the '" +
                            i.method +
                            "' method."),
                        e)
                      );
                    }
                  }
                  if (!o)
                    return this.objectLength(a) && this.successList.push(t), !0;
                },
                customDataMessage: function (e, t) {
                  return (
                    c(e).data(
                      "msg" +
                        t.charAt(0).toUpperCase() +
                        t.substring(1).toLowerCase()
                    ) || c(e).data("msg")
                  );
                },
                customMessage: function (e, t) {
                  var n = this.settings.messages[e];
                  return n && (n.constructor === String ? n : n[t]);
                },
                findDefined: function () {
                  for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e];
                },
                defaultMessage: function (e, t) {
                  "string" == typeof t && (t = { method: t });
                  var n = this.findDefined(
                      this.customMessage(e.name, t.method),
                      this.customDataMessage(e, t.method),
                      (!this.settings.ignoreTitle && e.title) || void 0,
                      c.validator.messages[t.method],
                      "<strong>Warning: No message defined for " +
                        e.name +
                        "</strong>"
                    ),
                    i = /\$?\{(\d+)\}/g;
                  return (
                    "function" == typeof n
                      ? (n = n.call(this, t.parameters, e))
                      : i.test(n) &&
                        (n = c.validator.format(
                          n.replace(i, "{$1}"),
                          t.parameters
                        )),
                    n
                  );
                },
                formatAndAdd: function (e, t) {
                  var n = this.defaultMessage(e, t);
                  this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method,
                  }),
                    (this.errorMap[e.name] = n),
                    (this.submitted[e.name] = n);
                },
                addWrapper: function (e) {
                  return (
                    this.settings.wrapper &&
                      (e = e.add(e.parent(this.settings.wrapper))),
                    e
                  );
                },
                defaultShowErrors: function () {
                  var e, t, n;
                  for (e = 0; this.errorList[e]; e++)
                    (n = this.errorList[e]),
                      this.settings.highlight &&
                        this.settings.highlight.call(
                          this,
                          n.element,
                          this.settings.errorClass,
                          this.settings.validClass
                        ),
                      this.showLabel(n.element, n.message);
                  if (
                    (this.errorList.length &&
                      (this.toShow = this.toShow.add(this.containers)),
                    this.settings.success)
                  )
                    for (e = 0; this.successList[e]; e++)
                      this.showLabel(this.successList[e]);
                  if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++)
                      this.settings.unhighlight.call(
                        this,
                        t[e],
                        this.settings.errorClass,
                        this.settings.validClass
                      );
                  (this.toHide = this.toHide.not(this.toShow)),
                    this.hideErrors(),
                    this.addWrapper(this.toShow).show();
                },
                validElements: function () {
                  return this.currentElements.not(this.invalidElements());
                },
                invalidElements: function () {
                  return c(this.errorList).map(function () {
                    return this.element;
                  });
                },
                showLabel: function (e, t) {
                  var n,
                    i,
                    r,
                    a,
                    s = this.errorsFor(e),
                    o = this.idOrName(e),
                    l = c(e).attr("aria-describedby");
                  s.length
                    ? (s
                        .removeClass(this.settings.validClass)
                        .addClass(this.settings.errorClass),
                      s.html(t))
                    : ((n = s =
                        c("<" + this.settings.errorElement + ">")
                          .attr("id", o + "-error")
                          .addClass(this.settings.errorClass)
                          .html(t || "")),
                      this.settings.wrapper &&
                        (n = s
                          .hide()
                          .show()
                          .wrap("<" + this.settings.wrapper + "/>")
                          .parent()),
                      this.labelContainer.length
                        ? this.labelContainer.append(n)
                        : this.settings.errorPlacement
                        ? this.settings.errorPlacement.call(this, n, c(e))
                        : n.insertAfter(e),
                      s.is("label")
                        ? s.attr("for", o)
                        : 0 ===
                            s.parents(
                              "label[for='" + this.escapeCssMeta(o) + "']"
                            ).length &&
                          ((r = s.attr("id")),
                          l
                            ? l.match(
                                new RegExp(
                                  "\\b" + this.escapeCssMeta(r) + "\\b"
                                )
                              ) || (l += " " + r)
                            : (l = r),
                          c(e).attr("aria-describedby", l),
                          (i = this.groups[e.name]) &&
                            ((a = this),
                            c.each(a.groups, function (e, t) {
                              t === i &&
                                c(
                                  "[name='" + a.escapeCssMeta(e) + "']",
                                  a.currentForm
                                ).attr("aria-describedby", s.attr("id"));
                            })))),
                    !t &&
                      this.settings.success &&
                      (s.text(""),
                      "string" == typeof this.settings.success
                        ? s.addClass(this.settings.success)
                        : this.settings.success(s, e)),
                    (this.toShow = this.toShow.add(s));
                },
                errorsFor: function (e) {
                  var t = this.escapeCssMeta(this.idOrName(e)),
                    n = c(e).attr("aria-describedby"),
                    i = "label[for='" + t + "'], label[for='" + t + "'] *";
                  return (
                    n &&
                      (i =
                        i +
                        ", #" +
                        this.escapeCssMeta(n).replace(/\s+/g, ", #")),
                    this.errors().filter(i)
                  );
                },
                escapeCssMeta: function (e) {
                  return e.replace(
                    /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,
                    "\\$1"
                  );
                },
                idOrName: function (e) {
                  return (
                    this.groups[e.name] ||
                    (this.checkable(e) ? e.name : e.id || e.name)
                  );
                },
                validationTargetFor: function (e) {
                  return (
                    this.checkable(e) && (e = this.findByName(e.name)),
                    c(e).not(this.settings.ignore)[0]
                  );
                },
                checkable: function (e) {
                  return /radio|checkbox/i.test(e.type);
                },
                findByName: function (e) {
                  return c(this.currentForm).find(
                    "[name='" + this.escapeCssMeta(e) + "']"
                  );
                },
                getLength: function (e, t) {
                  switch (t.nodeName.toLowerCase()) {
                    case "select":
                      return c("option:selected", t).length;
                    case "input":
                      if (this.checkable(t))
                        return this.findByName(t.name).filter(":checked")
                          .length;
                  }
                  return e.length;
                },
                depend: function (e, t) {
                  return (
                    !this.dependTypes[typeof e] ||
                    this.dependTypes[typeof e](e, t)
                  );
                },
                dependTypes: {
                  boolean: function (e) {
                    return e;
                  },
                  string: function (e, t) {
                    return !!c(e, t.form).length;
                  },
                  function: function (e, t) {
                    return e(t);
                  },
                },
                optional: function (e) {
                  var t = this.elementValue(e);
                  return (
                    !c.validator.methods.required.call(this, t, e) &&
                    "dependency-mismatch"
                  );
                },
                startRequest: function (e) {
                  this.pending[e.name] ||
                    (this.pendingRequest++,
                    c(e).addClass(this.settings.pendingClass),
                    (this.pending[e.name] = !0));
                },
                stopRequest: function (e, t) {
                  this.pendingRequest--,
                    this.pendingRequest < 0 && (this.pendingRequest = 0),
                    delete this.pending[e.name],
                    c(e).removeClass(this.settings.pendingClass),
                    t &&
                    0 === this.pendingRequest &&
                    this.formSubmitted &&
                    this.form()
                      ? (c(this.currentForm).submit(),
                        this.submitButton &&
                          c(
                            "input:hidden[name='" +
                              this.submitButton.name +
                              "']",
                            this.currentForm
                          ).remove(),
                        (this.formSubmitted = !1))
                      : !t &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        (c(this.currentForm).triggerHandler("invalid-form", [
                          this,
                        ]),
                        (this.formSubmitted = !1));
                },
                previousValue: function (e, t) {
                  return (
                    (t = ("string" == typeof t && t) || "remote"),
                    c.data(e, "previousValue") ||
                      c.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, { method: t }),
                      })
                  );
                },
                destroy: function () {
                  this.resetForm(),
                    c(this.currentForm)
                      .off(".validate")
                      .removeData("validator")
                      .find(".validate-equalTo-blur")
                      .off(".validate-equalTo")
                      .removeClass("validate-equalTo-blur")
                      .find(".validate-lessThan-blur")
                      .off(".validate-lessThan")
                      .removeClass("validate-lessThan-blur")
                      .find(".validate-lessThanEqual-blur")
                      .off(".validate-lessThanEqual")
                      .removeClass("validate-lessThanEqual-blur")
                      .find(".validate-greaterThanEqual-blur")
                      .off(".validate-greaterThanEqual")
                      .removeClass("validate-greaterThanEqual-blur")
                      .find(".validate-greaterThan-blur")
                      .off(".validate-greaterThan")
                      .removeClass("validate-greaterThan-blur");
                },
              },
              classRuleSettings: {
                required: { required: !0 },
                email: { email: !0 },
                url: { url: !0 },
                date: { date: !0 },
                dateISO: { dateISO: !0 },
                number: { number: !0 },
                digits: { digits: !0 },
                creditcard: { creditcard: !0 },
              },
              addClassRules: function (e, t) {
                e.constructor === String
                  ? (this.classRuleSettings[e] = t)
                  : c.extend(this.classRuleSettings, e);
              },
              classRules: function (e) {
                var t = {},
                  n = c(e).attr("class");
                return (
                  n &&
                    c.each(n.split(" "), function () {
                      this in c.validator.classRuleSettings &&
                        c.extend(t, c.validator.classRuleSettings[this]);
                    }),
                  t
                );
              },
              normalizeAttributeRule: function (e, t, n, i) {
                /min|max|step/.test(n) &&
                  (null === t || /number|range|text/.test(t)) &&
                  ((i = Number(i)), isNaN(i) && (i = void 0)),
                  i || 0 === i
                    ? (e[n] = i)
                    : t === n && "range" !== t && (e[n] = !0);
              },
              attributeRules: function (e) {
                var t,
                  n,
                  i = {},
                  r = c(e),
                  a = e.getAttribute("type");
                for (t in c.validator.methods)
                  (n =
                    "required" === t
                      ? ("" === (n = e.getAttribute(t)) && (n = !0), !!n)
                      : r.attr(t)),
                    this.normalizeAttributeRule(i, a, t, n);
                return (
                  i.maxlength &&
                    /-1|2147483647|524288/.test(i.maxlength) &&
                    delete i.maxlength,
                  i
                );
              },
              dataRules: function (e) {
                var t,
                  n,
                  i = {},
                  r = c(e),
                  a = e.getAttribute("type");
                for (t in c.validator.methods)
                  "" ===
                    (n = r.data(
                      "rule" +
                        t.charAt(0).toUpperCase() +
                        t.substring(1).toLowerCase()
                    )) && (n = !0),
                    this.normalizeAttributeRule(i, a, t, n);
                return i;
              },
              staticRules: function (e) {
                var t = {},
                  n = c.data(e.form, "validator");
                return (
                  n.settings.rules &&
                    (t =
                      c.validator.normalizeRule(n.settings.rules[e.name]) ||
                      {}),
                  t
                );
              },
              normalizeRules: function (i, r) {
                return (
                  c.each(i, function (e, t) {
                    if (!1 !== t) {
                      if (t.param || t.depends) {
                        var n = !0;
                        switch (typeof t.depends) {
                          case "string":
                            n = !!c(t.depends, r.form).length;
                            break;
                          case "function":
                            n = t.depends.call(r, r);
                        }
                        n
                          ? (i[e] = void 0 === t.param || t.param)
                          : (c.data(r.form, "validator").resetElements(c(r)),
                            delete i[e]);
                      }
                    } else delete i[e];
                  }),
                  c.each(i, function (e, t) {
                    i[e] = c.isFunction(t) && "normalizer" !== e ? t(r) : t;
                  }),
                  c.each(["minlength", "maxlength"], function () {
                    i[this] && (i[this] = Number(i[this]));
                  }),
                  c.each(["rangelength", "range"], function () {
                    var e;
                    i[this] &&
                      (c.isArray(i[this])
                        ? (i[this] = [Number(i[this][0]), Number(i[this][1])])
                        : "string" == typeof i[this] &&
                          ((e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                          (i[this] = [Number(e[0]), Number(e[1])])));
                  }),
                  c.validator.autoCreateRanges &&
                    (null != i.min &&
                      null != i.max &&
                      ((i.range = [i.min, i.max]), delete i.min, delete i.max),
                    null != i.minlength &&
                      null != i.maxlength &&
                      ((i.rangelength = [i.minlength, i.maxlength]),
                      delete i.minlength,
                      delete i.maxlength)),
                  i
                );
              },
              normalizeRule: function (e) {
                if ("string" == typeof e) {
                  var t = {};
                  c.each(e.split(/\s/), function () {
                    t[this] = !0;
                  }),
                    (e = t);
                }
                return e;
              },
              addMethod: function (e, t, n) {
                (c.validator.methods[e] = t),
                  (c.validator.messages[e] =
                    void 0 !== n ? n : c.validator.messages[e]),
                  t.length < 3 &&
                    c.validator.addClassRules(e, c.validator.normalizeRule(e));
              },
              methods: {
                required: function (e, t, n) {
                  if (!this.depend(n, t)) return "dependency-mismatch";
                  if ("select" !== t.nodeName.toLowerCase())
                    return this.checkable(t)
                      ? 0 < this.getLength(e, t)
                      : null != e && 0 < e.length;
                  var i = c(t).val();
                  return i && 0 < i.length;
                },
                email: function (e, t) {
                  return (
                    this.optional(t) ||
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                      e
                    )
                  );
                },
                url: function (e, t) {
                  return (
                    this.optional(t) ||
                    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                      e
                    )
                  );
                },
                date:
                  ((n = !1),
                  function (e, t) {
                    return (
                      n ||
                        ((n = !0),
                        this.settings.debug &&
                          window.console &&
                          console.warn(
                            "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                          )),
                      this.optional(t) ||
                        !/Invalid|NaN/.test(new Date(e).toString())
                    );
                  }),
                dateISO: function (e, t) {
                  return (
                    this.optional(t) ||
                    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                      e
                    )
                  );
                },
                number: function (e, t) {
                  return (
                    this.optional(t) ||
                    /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                  );
                },
                digits: function (e, t) {
                  return this.optional(t) || /^\d+$/.test(e);
                },
                minlength: function (e, t, n) {
                  var i = c.isArray(e) ? e.length : this.getLength(e, t);
                  return this.optional(t) || n <= i;
                },
                maxlength: function (e, t, n) {
                  var i = c.isArray(e) ? e.length : this.getLength(e, t);
                  return this.optional(t) || i <= n;
                },
                rangelength: function (e, t, n) {
                  var i = c.isArray(e) ? e.length : this.getLength(e, t);
                  return this.optional(t) || (i >= n[0] && i <= n[1]);
                },
                min: function (e, t, n) {
                  return this.optional(t) || n <= e;
                },
                max: function (e, t, n) {
                  return this.optional(t) || e <= n;
                },
                range: function (e, t, n) {
                  return this.optional(t) || (e >= n[0] && e <= n[1]);
                },
                step: function (e, t, n) {
                  var i,
                    r = c(t).attr("type"),
                    a =
                      "Step attribute on input type " +
                      r +
                      " is not supported.",
                    s = new RegExp("\\b" + r + "\\b"),
                    o = function (e) {
                      var t = ("" + e).match(/(?:\.(\d+))?$/);
                      return t && t[1] ? t[1].length : 0;
                    },
                    l = function (e) {
                      return Math.round(e * Math.pow(10, i));
                    },
                    u = !0;
                  if (r && !s.test(["text", "number", "range"].join()))
                    throw new Error(a);
                  return (
                    (i = o(n)),
                    (o(e) > i || l(e) % l(n) != 0) && (u = !1),
                    this.optional(t) || u
                  );
                },
                equalTo: function (e, t, n) {
                  var i = c(n);
                  return (
                    this.settings.onfocusout &&
                      i.not(".validate-equalTo-blur").length &&
                      i
                        .addClass("validate-equalTo-blur")
                        .on("blur.validate-equalTo", function () {
                          c(t).valid();
                        }),
                    e === i.val()
                  );
                },
                remote: function (a, s, e, o) {
                  if (this.optional(s)) return "dependency-mismatch";
                  o = ("string" == typeof o && o) || "remote";
                  var l,
                    t,
                    n,
                    u = this.previousValue(s, o);
                  return (
                    this.settings.messages[s.name] ||
                      (this.settings.messages[s.name] = {}),
                    (u.originalMessage =
                      u.originalMessage || this.settings.messages[s.name][o]),
                    (this.settings.messages[s.name][o] = u.message),
                    (e = ("string" == typeof e && { url: e }) || e),
                    (n = c.param(c.extend({ data: a }, e.data))),
                    u.old === n
                      ? u.valid
                      : ((u.old = n),
                        (l = this).startRequest(s),
                        ((t = {})[s.name] = a),
                        c.ajax(
                          c.extend(
                            !0,
                            {
                              mode: "abort",
                              port: "validate" + s.name,
                              dataType: "json",
                              data: t,
                              context: l.currentForm,
                              success: function (e) {
                                var t,
                                  n,
                                  i,
                                  r = !0 === e || "true" === e;
                                (l.settings.messages[s.name][o] =
                                  u.originalMessage),
                                  r
                                    ? ((i = l.formSubmitted),
                                      l.resetInternals(),
                                      (l.toHide = l.errorsFor(s)),
                                      (l.formSubmitted = i),
                                      l.successList.push(s),
                                      (l.invalid[s.name] = !1),
                                      l.showErrors())
                                    : ((t = {}),
                                      (n =
                                        e ||
                                        l.defaultMessage(s, {
                                          method: o,
                                          parameters: a,
                                        })),
                                      (t[s.name] = u.message = n),
                                      (l.invalid[s.name] = !0),
                                      l.showErrors(t)),
                                  (u.valid = r),
                                  l.stopRequest(s, r);
                              },
                            },
                            e
                          )
                        ),
                        "pending")
                  );
                },
              },
            });
          var i,
            r = {};
          return (
            c.ajaxPrefilter
              ? c.ajaxPrefilter(function (e, t, n) {
                  var i = e.port;
                  "abort" === e.mode && (r[i] && r[i].abort(), (r[i] = n));
                })
              : ((i = c.ajax),
                (c.ajax = function (e) {
                  var t = ("mode" in e ? e : c.ajaxSettings).mode,
                    n = ("port" in e ? e : c.ajaxSettings).port;
                  return "abort" === t
                    ? (r[n] && r[n].abort(),
                      (r[n] = i.apply(this, arguments)),
                      r[n])
                    : i.apply(this, arguments);
                })),
            c
          );
        }),
          "function" == typeof define && define.amd
            ? define(["jquery"], i)
            : "object" == typeof t && t.exports
            ? (t.exports = i(e("jquery")))
            : i(jQuery);
      },
      { jquery: 3 },
    ],
    3: [
      function (e, t, n) {
        (function (e) {
          (function (n, e, t, Zt, i) {
            !(function (e, t) {
              "use strict";
              "object" == typeof n && "object" == typeof n.exports
                ? (n.exports = e.document
                    ? t(e, !0)
                    : function (e) {
                        if (!e.document)
                          throw new Error(
                            "jQuery requires a window with a document"
                          );
                        return t(e);
                      })
                : t(e);
            })("undefined" != typeof window ? window : this, function (C, e) {
              "use strict";
              var t = [],
                k = C.document,
                i = Object.getPrototypeOf,
                o = t.slice,
                g = t.concat,
                l = t.push,
                r = t.indexOf,
                n = {},
                a = n.toString,
                m = n.hasOwnProperty,
                s = m.toString,
                u = s.call(Object),
                v = {},
                y = function (e) {
                  return (
                    "function" == typeof e && "number" != typeof e.nodeType
                  );
                },
                b = function (e) {
                  return null != e && e === e.window;
                },
                c = { type: !0, src: !0, nonce: !0, noModule: !0 };
              function w(e, t, n) {
                var i,
                  r,
                  a = (n = n || k).createElement("script");
                if (((a.text = e), t))
                  for (i in c)
                    (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                      a.setAttribute(i, r);
                n.head.appendChild(a).parentNode.removeChild(a);
              }
              function x(e) {
                return null == e
                  ? e + ""
                  : "object" == typeof e || "function" == typeof e
                  ? n[a.call(e)] || "object"
                  : typeof e;
              }
              var T = function (e, t) {
                  return new T.fn.init(e, t);
                },
                d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
              function h(e) {
                var t = !!e && "length" in e && e.length,
                  n = x(e);
                return (
                  !y(e) &&
                  !b(e) &&
                  ("array" === n ||
                    0 === t ||
                    ("number" == typeof t && 0 < t && t - 1 in e))
                );
              }
              (T.fn = T.prototype =
                {
                  jquery: "3.4.1",
                  constructor: T,
                  length: 0,
                  toArray: function () {
                    return o.call(this);
                  },
                  get: function (e) {
                    return null == e
                      ? o.call(this)
                      : e < 0
                      ? this[e + this.length]
                      : this[e];
                  },
                  pushStack: function (e) {
                    var t = T.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                  },
                  each: function (e) {
                    return T.each(this, e);
                  },
                  map: function (n) {
                    return this.pushStack(
                      T.map(this, function (e, t) {
                        return n.call(e, t, e);
                      })
                    );
                  },
                  slice: function () {
                    return this.pushStack(o.apply(this, arguments));
                  },
                  first: function () {
                    return this.eq(0);
                  },
                  last: function () {
                    return this.eq(-1);
                  },
                  eq: function (e) {
                    var t = this.length,
                      n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : []);
                  },
                  end: function () {
                    return this.prevObject || this.constructor();
                  },
                  push: l,
                  sort: t.sort,
                  splice: t.splice,
                }),
                (T.extend = T.fn.extend =
                  function () {
                    var e,
                      t,
                      n,
                      i,
                      r,
                      a,
                      s = arguments[0] || {},
                      o = 1,
                      l = arguments.length,
                      u = !1;
                    for (
                      "boolean" == typeof s &&
                        ((u = s), (s = arguments[o] || {}), o++),
                        "object" == typeof s || y(s) || (s = {}),
                        o === l && ((s = this), o--);
                      o < l;
                      o++
                    )
                      if (null != (e = arguments[o]))
                        for (t in e)
                          (i = e[t]),
                            "__proto__" !== t &&
                              s !== i &&
                              (u &&
                              i &&
                              (T.isPlainObject(i) || (r = Array.isArray(i)))
                                ? ((n = s[t]),
                                  (a =
                                    r && !Array.isArray(n)
                                      ? []
                                      : r || T.isPlainObject(n)
                                      ? n
                                      : {}),
                                  (r = !1),
                                  (s[t] = T.extend(u, a, i)))
                                : void 0 !== i && (s[t] = i));
                    return s;
                  }),
                T.extend({
                  expando:
                    "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                  isReady: !0,
                  error: function (e) {
                    throw new Error(e);
                  },
                  noop: function () {},
                  isPlainObject: function (e) {
                    var t, n;
                    return (
                      !(!e || "[object Object]" !== a.call(e)) &&
                      (!(t = i(e)) ||
                        ("function" ==
                          typeof (n =
                            m.call(t, "constructor") && t.constructor) &&
                          s.call(n) === u))
                    );
                  },
                  isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                  },
                  globalEval: function (e, t) {
                    w(e, { nonce: t && t.nonce });
                  },
                  each: function (e, t) {
                    var n,
                      i = 0;
                    if (h(e))
                      for (
                        n = e.length;
                        i < n && !1 !== t.call(e[i], i, e[i]);
                        i++
                      );
                    else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                    return e;
                  },
                  trim: function (e) {
                    return null == e ? "" : (e + "").replace(d, "");
                  },
                  makeArray: function (e, t) {
                    var n = t || [];
                    return (
                      null != e &&
                        (h(Object(e))
                          ? T.merge(n, "string" == typeof e ? [e] : e)
                          : l.call(n, e)),
                      n
                    );
                  },
                  inArray: function (e, t, n) {
                    return null == t ? -1 : r.call(t, e, n);
                  },
                  merge: function (e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                      e[r++] = t[i];
                    return (e.length = r), e;
                  },
                  grep: function (e, t, n) {
                    for (var i = [], r = 0, a = e.length, s = !n; r < a; r++)
                      !t(e[r], r) !== s && i.push(e[r]);
                    return i;
                  },
                  map: function (e, t, n) {
                    var i,
                      r,
                      a = 0,
                      s = [];
                    if (h(e))
                      for (i = e.length; a < i; a++)
                        null != (r = t(e[a], a, n)) && s.push(r);
                    else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
                    return g.apply([], s);
                  },
                  guid: 1,
                  support: v,
                }),
                "function" == typeof Symbol &&
                  (T.fn[Symbol.iterator] = t[Symbol.iterator]),
                T.each(
                  "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                    " "
                  ),
                  function (e, t) {
                    n["[object " + t + "]"] = t.toLowerCase();
                  }
                );
              var f = (function (n) {
                var e,
                  f,
                  w,
                  a,
                  r,
                  p,
                  d,
                  g,
                  x,
                  l,
                  u,
                  D,
                  C,
                  s,
                  k,
                  m,
                  o,
                  c,
                  v,
                  T = "sizzle" + 1 * new Date(),
                  y = n.document,
                  S = 0,
                  i = 0,
                  h = le(),
                  b = le(),
                  E = le(),
                  A = le(),
                  N = function (e, t) {
                    return e === t && (u = !0), 0;
                  },
                  M = {}.hasOwnProperty,
                  t = [],
                  j = t.pop,
                  _ = t.push,
                  q = t.push,
                  L = t.slice,
                  F = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                      if (e[n] === t) return n;
                    return -1;
                  },
                  O =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                  R = "[\\x20\\t\\r\\n\\f]",
                  U = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                  H =
                    "\\[" +
                    R +
                    "*(" +
                    U +
                    ")(?:" +
                    R +
                    "*([*^$|!~]?=)" +
                    R +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    U +
                    "))|)" +
                    R +
                    "*\\]",
                  I =
                    ":(" +
                    U +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    H +
                    ")*)|.*)\\)|)",
                  P = new RegExp(R + "+", "g"),
                  W = new RegExp(
                    "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
                    "g"
                  ),
                  $ = new RegExp("^" + R + "*," + R + "*"),
                  V = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                  z = new RegExp(R + "|>"),
                  B = new RegExp(I),
                  Y = new RegExp("^" + U + "$"),
                  X = {
                    ID: new RegExp("^#(" + U + ")"),
                    CLASS: new RegExp("^\\.(" + U + ")"),
                    TAG: new RegExp("^(" + U + "|[*])"),
                    ATTR: new RegExp("^" + H),
                    PSEUDO: new RegExp("^" + I),
                    CHILD: new RegExp(
                      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        R +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        R +
                        "*(?:([+-]|)" +
                        R +
                        "*(\\d+)|))" +
                        R +
                        "*\\)|)",
                      "i"
                    ),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp(
                      "^" +
                        R +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        R +
                        "*((?:-\\d)?\\d*)" +
                        R +
                        "*\\)|)(?=[^-]|$)",
                      "i"
                    ),
                  },
                  J = /HTML$/i,
                  G = /^(?:input|select|textarea|button)$/i,
                  Z = /^h\d$/i,
                  Q = /^[^{]+\{\s*\[native \w/,
                  K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                  ee = /[+~]/,
                  te = new RegExp(
                    "\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)",
                    "ig"
                  ),
                  ne = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n
                      ? t
                      : i < 0
                      ? String.fromCharCode(i + 65536)
                      : String.fromCharCode(
                          (i >> 10) | 55296,
                          (1023 & i) | 56320
                        );
                  },
                  ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                  re = function (e, t) {
                    return t
                      ? "\0" === e
                        ? "ï¿½"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                      : "\\" + e;
                  },
                  ae = function () {
                    D();
                  },
                  se = we(
                    function (e) {
                      return (
                        !0 === e.disabled &&
                        "fieldset" === e.nodeName.toLowerCase()
                      );
                    },
                    { dir: "parentNode", next: "legend" }
                  );
                try {
                  q.apply((t = L.call(y.childNodes)), y.childNodes),
                    t[y.childNodes.length].nodeType;
                } catch (e) {
                  q = {
                    apply: t.length
                      ? function (e, t) {
                          _.apply(e, L.call(t));
                        }
                      : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                        },
                  };
                }
                function oe(t, e, n, i) {
                  var r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = e && e.ownerDocument,
                    h = e ? e.nodeType : 9;
                  if (
                    ((n = n || []),
                    "string" != typeof t ||
                      !t ||
                      (1 !== h && 9 !== h && 11 !== h))
                  )
                    return n;
                  if (
                    !i &&
                    ((e ? e.ownerDocument || e : y) !== C && D(e),
                    (e = e || C),
                    k)
                  ) {
                    if (11 !== h && (l = K.exec(t)))
                      if ((r = l[1])) {
                        if (9 === h) {
                          if (!(s = e.getElementById(r))) return n;
                          if (s.id === r) return n.push(s), n;
                        } else if (
                          d &&
                          (s = d.getElementById(r)) &&
                          v(e, s) &&
                          s.id === r
                        )
                          return n.push(s), n;
                      } else {
                        if (l[2])
                          return q.apply(n, e.getElementsByTagName(t)), n;
                        if (
                          (r = l[3]) &&
                          f.getElementsByClassName &&
                          e.getElementsByClassName
                        )
                          return q.apply(n, e.getElementsByClassName(r)), n;
                      }
                    if (
                      f.qsa &&
                      !A[t + " "] &&
                      (!m || !m.test(t)) &&
                      (1 !== h || "object" !== e.nodeName.toLowerCase())
                    ) {
                      if (((c = t), (d = e), 1 === h && z.test(t))) {
                        for (
                          (o = e.getAttribute("id"))
                            ? (o = o.replace(ie, re))
                            : e.setAttribute("id", (o = T)),
                            a = (u = p(t)).length;
                          a--;

                        )
                          u[a] = "#" + o + " " + be(u[a]);
                        (c = u.join(",")),
                          (d = (ee.test(t) && ve(e.parentNode)) || e);
                      }
                      try {
                        return q.apply(n, d.querySelectorAll(c)), n;
                      } catch (e) {
                        A(t, !0);
                      } finally {
                        o === T && e.removeAttribute("id");
                      }
                    }
                  }
                  return g(t.replace(W, "$1"), e, n, i);
                }
                function le() {
                  var i = [];
                  return function e(t, n) {
                    return (
                      i.push(t + " ") > w.cacheLength && delete e[i.shift()],
                      (e[t + " "] = n)
                    );
                  };
                }
                function ue(e) {
                  return (e[T] = !0), e;
                }
                function ce(e) {
                  var t = C.createElement("fieldset");
                  try {
                    return !!e(t);
                  } catch (e) {
                    return !1;
                  } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                  }
                }
                function de(e, t) {
                  for (var n = e.split("|"), i = n.length; i--; )
                    w.attrHandle[n[i]] = t;
                }
                function he(e, t) {
                  var n = t && e,
                    i =
                      n &&
                      1 === e.nodeType &&
                      1 === t.nodeType &&
                      e.sourceIndex - t.sourceIndex;
                  if (i) return i;
                  if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                  return e ? 1 : -1;
                }
                function fe(t) {
                  return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                  };
                }
                function pe(n) {
                  return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                  };
                }
                function ge(t) {
                  return function (e) {
                    return "form" in e
                      ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                          ? "label" in e.parentNode
                            ? e.parentNode.disabled === t
                            : e.disabled === t
                          : e.isDisabled === t ||
                            (e.isDisabled !== !t && se(e) === t)
                        : e.disabled === t
                      : "label" in e && e.disabled === t;
                  };
                }
                function me(s) {
                  return ue(function (a) {
                    return (
                      (a = +a),
                      ue(function (e, t) {
                        for (var n, i = s([], e.length, a), r = i.length; r--; )
                          e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
                      })
                    );
                  });
                }
                function ve(e) {
                  return e && void 0 !== e.getElementsByTagName && e;
                }
                for (e in ((f = oe.support = {}),
                (r = oe.isXML =
                  function (e) {
                    var t = e.namespaceURI,
                      n = (e.ownerDocument || e).documentElement;
                    return !J.test(t || (n && n.nodeName) || "HTML");
                  }),
                (D = oe.setDocument =
                  function (e) {
                    var t,
                      n,
                      i = e ? e.ownerDocument || e : y;
                    return (
                      i !== C &&
                        9 === i.nodeType &&
                        i.documentElement &&
                        ((s = (C = i).documentElement),
                        (k = !r(C)),
                        y !== C &&
                          (n = C.defaultView) &&
                          n.top !== n &&
                          (n.addEventListener
                            ? n.addEventListener("unload", ae, !1)
                            : n.attachEvent && n.attachEvent("onunload", ae)),
                        (f.attributes = ce(function (e) {
                          return (
                            (e.className = "i"), !e.getAttribute("className")
                          );
                        })),
                        (f.getElementsByTagName = ce(function (e) {
                          return (
                            e.appendChild(C.createComment("")),
                            !e.getElementsByTagName("*").length
                          );
                        })),
                        (f.getElementsByClassName = Q.test(
                          C.getElementsByClassName
                        )),
                        (f.getById = ce(function (e) {
                          return (
                            (s.appendChild(e).id = T),
                            !C.getElementsByName ||
                              !C.getElementsByName(T).length
                          );
                        })),
                        f.getById
                          ? ((w.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                return e.getAttribute("id") === t;
                              };
                            }),
                            (w.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && k) {
                                var n = t.getElementById(e);
                                return n ? [n] : [];
                              }
                            }))
                          : ((w.filter.ID = function (e) {
                              var n = e.replace(te, ne);
                              return function (e) {
                                var t =
                                  void 0 !== e.getAttributeNode &&
                                  e.getAttributeNode("id");
                                return t && t.value === n;
                              };
                            }),
                            (w.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && k) {
                                var n,
                                  i,
                                  r,
                                  a = t.getElementById(e);
                                if (a) {
                                  if (
                                    (n = a.getAttributeNode("id")) &&
                                    n.value === e
                                  )
                                    return [a];
                                  for (
                                    r = t.getElementsByName(e), i = 0;
                                    (a = r[i++]);

                                  )
                                    if (
                                      (n = a.getAttributeNode("id")) &&
                                      n.value === e
                                    )
                                      return [a];
                                }
                                return [];
                              }
                            })),
                        (w.find.TAG = f.getElementsByTagName
                          ? function (e, t) {
                              return void 0 !== t.getElementsByTagName
                                ? t.getElementsByTagName(e)
                                : f.qsa
                                ? t.querySelectorAll(e)
                                : void 0;
                            }
                          : function (e, t) {
                              var n,
                                i = [],
                                r = 0,
                                a = t.getElementsByTagName(e);
                              if ("*" !== e) return a;
                              for (; (n = a[r++]); )
                                1 === n.nodeType && i.push(n);
                              return i;
                            }),
                        (w.find.CLASS =
                          f.getElementsByClassName &&
                          function (e, t) {
                            if (void 0 !== t.getElementsByClassName && k)
                              return t.getElementsByClassName(e);
                          }),
                        (o = []),
                        (m = []),
                        (f.qsa = Q.test(C.querySelectorAll)) &&
                          (ce(function (e) {
                            (s.appendChild(e).innerHTML =
                              "<a id='" +
                              T +
                              "'></a><select id='" +
                              T +
                              "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                              e.querySelectorAll("[msallowcapture^='']")
                                .length &&
                                m.push("[*^$]=" + R + "*(?:''|\"\")"),
                              e.querySelectorAll("[selected]").length ||
                                m.push("\\[" + R + "*(?:value|" + O + ")"),
                              e.querySelectorAll("[id~=" + T + "-]").length ||
                                m.push("~="),
                              e.querySelectorAll(":checked").length ||
                                m.push(":checked"),
                              e.querySelectorAll("a#" + T + "+*").length ||
                                m.push(".#.+[+~]");
                          }),
                          ce(function (e) {
                            e.innerHTML =
                              "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                              e.appendChild(t).setAttribute("name", "D"),
                              e.querySelectorAll("[name=d]").length &&
                                m.push("name" + R + "*[*^$|!~]?="),
                              2 !== e.querySelectorAll(":enabled").length &&
                                m.push(":enabled", ":disabled"),
                              (s.appendChild(e).disabled = !0),
                              2 !== e.querySelectorAll(":disabled").length &&
                                m.push(":enabled", ":disabled"),
                              e.querySelectorAll("*,:x"),
                              m.push(",.*:");
                          })),
                        (f.matchesSelector = Q.test(
                          (c =
                            s.matches ||
                            s.webkitMatchesSelector ||
                            s.mozMatchesSelector ||
                            s.oMatchesSelector ||
                            s.msMatchesSelector)
                        )) &&
                          ce(function (e) {
                            (f.disconnectedMatch = c.call(e, "*")),
                              c.call(e, "[s!='']:x"),
                              o.push("!=", I);
                          }),
                        (m = m.length && new RegExp(m.join("|"))),
                        (o = o.length && new RegExp(o.join("|"))),
                        (t = Q.test(s.compareDocumentPosition)),
                        (v =
                          t || Q.test(s.contains)
                            ? function (e, t) {
                                var n =
                                    9 === e.nodeType ? e.documentElement : e,
                                  i = t && t.parentNode;
                                return (
                                  e === i ||
                                  !(
                                    !i ||
                                    1 !== i.nodeType ||
                                    !(n.contains
                                      ? n.contains(i)
                                      : e.compareDocumentPosition &&
                                        16 & e.compareDocumentPosition(i))
                                  )
                                );
                              }
                            : function (e, t) {
                                if (t)
                                  for (; (t = t.parentNode); )
                                    if (t === e) return !0;
                                return !1;
                              }),
                        (N = t
                          ? function (e, t) {
                              if (e === t) return (u = !0), 0;
                              var n =
                                !e.compareDocumentPosition -
                                !t.compareDocumentPosition;
                              return (
                                n ||
                                (1 &
                                  (n =
                                    (e.ownerDocument || e) ===
                                    (t.ownerDocument || t)
                                      ? e.compareDocumentPosition(t)
                                      : 1) ||
                                (!f.sortDetached &&
                                  t.compareDocumentPosition(e) === n)
                                  ? e === C ||
                                    (e.ownerDocument === y && v(y, e))
                                    ? -1
                                    : t === C ||
                                      (t.ownerDocument === y && v(y, t))
                                    ? 1
                                    : l
                                    ? F(l, e) - F(l, t)
                                    : 0
                                  : 4 & n
                                  ? -1
                                  : 1)
                              );
                            }
                          : function (e, t) {
                              if (e === t) return (u = !0), 0;
                              var n,
                                i = 0,
                                r = e.parentNode,
                                a = t.parentNode,
                                s = [e],
                                o = [t];
                              if (!r || !a)
                                return e === C
                                  ? -1
                                  : t === C
                                  ? 1
                                  : r
                                  ? -1
                                  : a
                                  ? 1
                                  : l
                                  ? F(l, e) - F(l, t)
                                  : 0;
                              if (r === a) return he(e, t);
                              for (n = e; (n = n.parentNode); ) s.unshift(n);
                              for (n = t; (n = n.parentNode); ) o.unshift(n);
                              for (; s[i] === o[i]; ) i++;
                              return i
                                ? he(s[i], o[i])
                                : s[i] === y
                                ? -1
                                : o[i] === y
                                ? 1
                                : 0;
                            })),
                      C
                    );
                  }),
                (oe.matches = function (e, t) {
                  return oe(e, null, null, t);
                }),
                (oe.matchesSelector = function (e, t) {
                  if (
                    ((e.ownerDocument || e) !== C && D(e),
                    f.matchesSelector &&
                      k &&
                      !A[t + " "] &&
                      (!o || !o.test(t)) &&
                      (!m || !m.test(t)))
                  )
                    try {
                      var n = c.call(e, t);
                      if (
                        n ||
                        f.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                      )
                        return n;
                    } catch (e) {
                      A(t, !0);
                    }
                  return 0 < oe(t, C, null, [e]).length;
                }),
                (oe.contains = function (e, t) {
                  return (e.ownerDocument || e) !== C && D(e), v(e, t);
                }),
                (oe.attr = function (e, t) {
                  (e.ownerDocument || e) !== C && D(e);
                  var n = w.attrHandle[t.toLowerCase()],
                    i =
                      n && M.call(w.attrHandle, t.toLowerCase())
                        ? n(e, t, !k)
                        : void 0;
                  return void 0 !== i
                    ? i
                    : f.attributes || !k
                    ? e.getAttribute(t)
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
                }),
                (oe.escape = function (e) {
                  return (e + "").replace(ie, re);
                }),
                (oe.error = function (e) {
                  throw new Error(
                    "Syntax error, unrecognized expression: " + e
                  );
                }),
                (oe.uniqueSort = function (e) {
                  var t,
                    n = [],
                    i = 0,
                    r = 0;
                  if (
                    ((u = !f.detectDuplicates),
                    (l = !f.sortStable && e.slice(0)),
                    e.sort(N),
                    u)
                  ) {
                    for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                    for (; i--; ) e.splice(n[i], 1);
                  }
                  return (l = null), e;
                }),
                (a = oe.getText =
                  function (e) {
                    var t,
                      n = "",
                      i = 0,
                      r = e.nodeType;
                    if (r) {
                      if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                          return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
                      } else if (3 === r || 4 === r) return e.nodeValue;
                    } else for (; (t = e[i++]); ) n += a(t);
                    return n;
                  }),
                ((w = oe.selectors =
                  {
                    cacheLength: 50,
                    createPseudo: ue,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                      ">": { dir: "parentNode", first: !0 },
                      " ": { dir: "parentNode" },
                      "+": { dir: "previousSibling", first: !0 },
                      "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                      ATTR: function (e) {
                        return (
                          (e[1] = e[1].replace(te, ne)),
                          (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                          "~=" === e[2] && (e[3] = " " + e[3] + " "),
                          e.slice(0, 4)
                        );
                      },
                      CHILD: function (e) {
                        return (
                          (e[1] = e[1].toLowerCase()),
                          "nth" === e[1].slice(0, 3)
                            ? (e[3] || oe.error(e[0]),
                              (e[4] = +(e[4]
                                ? e[5] + (e[6] || 1)
                                : 2 * ("even" === e[3] || "odd" === e[3]))),
                              (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                            : e[3] && oe.error(e[0]),
                          e
                        );
                      },
                      PSEUDO: function (e) {
                        var t,
                          n = !e[6] && e[2];
                        return X.CHILD.test(e[0])
                          ? null
                          : (e[3]
                              ? (e[2] = e[4] || e[5] || "")
                              : n &&
                                B.test(n) &&
                                (t = p(n, !0)) &&
                                (t = n.indexOf(")", n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)),
                                (e[2] = n.slice(0, t))),
                            e.slice(0, 3));
                      },
                    },
                    filter: {
                      TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e
                          ? function () {
                              return !0;
                            }
                          : function (e) {
                              return (
                                e.nodeName && e.nodeName.toLowerCase() === t
                              );
                            };
                      },
                      CLASS: function (e) {
                        var t = h[e + " "];
                        return (
                          t ||
                          ((t = new RegExp(
                            "(^|" + R + ")" + e + "(" + R + "|$)"
                          )) &&
                            h(e, function (e) {
                              return t.test(
                                ("string" == typeof e.className &&
                                  e.className) ||
                                  (void 0 !== e.getAttribute &&
                                    e.getAttribute("class")) ||
                                  ""
                              );
                            }))
                        );
                      },
                      ATTR: function (n, i, r) {
                        return function (e) {
                          var t = oe.attr(e, n);
                          return null == t
                            ? "!=" === i
                            : !i ||
                                ((t += ""),
                                "=" === i
                                  ? t === r
                                  : "!=" === i
                                  ? t !== r
                                  : "^=" === i
                                  ? r && 0 === t.indexOf(r)
                                  : "*=" === i
                                  ? r && -1 < t.indexOf(r)
                                  : "$=" === i
                                  ? r && t.slice(-r.length) === r
                                  : "~=" === i
                                  ? -1 <
                                    (" " + t.replace(P, " ") + " ").indexOf(r)
                                  : "|=" === i &&
                                    (t === r ||
                                      t.slice(0, r.length + 1) === r + "-"));
                        };
                      },
                      CHILD: function (p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                          y = "last" !== p.slice(-4),
                          b = "of-type" === e;
                        return 1 === g && 0 === m
                          ? function (e) {
                              return !!e.parentNode;
                            }
                          : function (e, t, n) {
                              var i,
                                r,
                                a,
                                s,
                                o,
                                l,
                                u = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                h = !n && !b,
                                f = !1;
                              if (c) {
                                if (v) {
                                  for (; u; ) {
                                    for (s = e; (s = s[u]); )
                                      if (
                                        b
                                          ? s.nodeName.toLowerCase() === d
                                          : 1 === s.nodeType
                                      )
                                        return !1;
                                    l = u = "only" === p && !l && "nextSibling";
                                  }
                                  return !0;
                                }
                                if (
                                  ((l = [y ? c.firstChild : c.lastChild]),
                                  y && h)
                                ) {
                                  for (
                                    f =
                                      (o =
                                        (i =
                                          (r =
                                            (a = (s = c)[T] || (s[T] = {}))[
                                              s.uniqueID
                                            ] || (a[s.uniqueID] = {}))[p] ||
                                          [])[0] === S && i[1]) && i[2],
                                      s = o && c.childNodes[o];
                                    (s =
                                      (++o && s && s[u]) ||
                                      (f = o = 0) ||
                                      l.pop());

                                  )
                                    if (1 === s.nodeType && ++f && s === e) {
                                      r[p] = [S, o, f];
                                      break;
                                    }
                                } else if (
                                  (h &&
                                    (f = o =
                                      (i =
                                        (r =
                                          (a = (s = e)[T] || (s[T] = {}))[
                                            s.uniqueID
                                          ] || (a[s.uniqueID] = {}))[p] ||
                                        [])[0] === S && i[1]),
                                  !1 === f)
                                )
                                  for (
                                    ;
                                    (s =
                                      (++o && s && s[u]) ||
                                      (f = o = 0) ||
                                      l.pop()) &&
                                    ((b
                                      ? s.nodeName.toLowerCase() !== d
                                      : 1 !== s.nodeType) ||
                                      !++f ||
                                      (h &&
                                        ((r =
                                          (a = s[T] || (s[T] = {}))[
                                            s.uniqueID
                                          ] || (a[s.uniqueID] = {}))[p] = [
                                          S,
                                          f,
                                        ]),
                                      s !== e));

                                  );
                                return (
                                  (f -= m) === g || (f % g == 0 && 0 <= f / g)
                                );
                              }
                            };
                      },
                      PSEUDO: function (e, a) {
                        var t,
                          s =
                            w.pseudos[e] ||
                            w.setFilters[e.toLowerCase()] ||
                            oe.error("unsupported pseudo: " + e);
                        return s[T]
                          ? s(a)
                          : 1 < s.length
                          ? ((t = [e, e, "", a]),
                            w.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ue(function (e, t) {
                                  for (var n, i = s(e, a), r = i.length; r--; )
                                    e[(n = F(e, i[r]))] = !(t[n] = i[r]);
                                })
                              : function (e) {
                                  return s(e, 0, t);
                                })
                          : s;
                      },
                    },
                    pseudos: {
                      not: ue(function (e) {
                        var i = [],
                          r = [],
                          o = d(e.replace(W, "$1"));
                        return o[T]
                          ? ue(function (e, t, n, i) {
                              for (
                                var r, a = o(e, null, i, []), s = e.length;
                                s--;

                              )
                                (r = a[s]) && (e[s] = !(t[s] = r));
                            })
                          : function (e, t, n) {
                              return (
                                (i[0] = e),
                                o(i, null, n, r),
                                (i[0] = null),
                                !r.pop()
                              );
                            };
                      }),
                      has: ue(function (t) {
                        return function (e) {
                          return 0 < oe(t, e).length;
                        };
                      }),
                      contains: ue(function (t) {
                        return (
                          (t = t.replace(te, ne)),
                          function (e) {
                            return -1 < (e.textContent || a(e)).indexOf(t);
                          }
                        );
                      }),
                      lang: ue(function (n) {
                        return (
                          Y.test(n || "") || oe.error("unsupported lang: " + n),
                          (n = n.replace(te, ne).toLowerCase()),
                          function (e) {
                            var t;
                            do {
                              if (
                                (t = k
                                  ? e.lang
                                  : e.getAttribute("xml:lang") ||
                                    e.getAttribute("lang"))
                              )
                                return (
                                  (t = t.toLowerCase()) === n ||
                                  0 === t.indexOf(n + "-")
                                );
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                          }
                        );
                      }),
                      target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                      },
                      root: function (e) {
                        return e === s;
                      },
                      focus: function (e) {
                        return (
                          e === C.activeElement &&
                          (!C.hasFocus || C.hasFocus()) &&
                          !!(e.type || e.href || ~e.tabIndex)
                        );
                      },
                      enabled: ge(!1),
                      disabled: ge(!0),
                      checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                          ("input" === t && !!e.checked) ||
                          ("option" === t && !!e.selected)
                        );
                      },
                      selected: function (e) {
                        return (
                          e.parentNode && e.parentNode.selectedIndex,
                          !0 === e.selected
                        );
                      },
                      empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                          if (e.nodeType < 6) return !1;
                        return !0;
                      },
                      parent: function (e) {
                        return !w.pseudos.empty(e);
                      },
                      header: function (e) {
                        return Z.test(e.nodeName);
                      },
                      input: function (e) {
                        return G.test(e.nodeName);
                      },
                      button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                          ("input" === t && "button" === e.type) ||
                          "button" === t
                        );
                      },
                      text: function (e) {
                        var t;
                        return (
                          "input" === e.nodeName.toLowerCase() &&
                          "text" === e.type &&
                          (null == (t = e.getAttribute("type")) ||
                            "text" === t.toLowerCase())
                        );
                      },
                      first: me(function () {
                        return [0];
                      }),
                      last: me(function (e, t) {
                        return [t - 1];
                      }),
                      eq: me(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                      }),
                      even: me(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                      }),
                      odd: me(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                      }),
                      lt: me(function (e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                          e.push(i);
                        return e;
                      }),
                      gt: me(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                        return e;
                      }),
                    },
                  }).pseudos.nth = w.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                  w.pseudos[e] = fe(e);
                for (e in { submit: !0, reset: !0 }) w.pseudos[e] = pe(e);
                function ye() {}
                function be(e) {
                  for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                  return i;
                }
                function we(o, e, t) {
                  var l = e.dir,
                    u = e.next,
                    c = u || l,
                    d = t && "parentNode" === c,
                    h = i++;
                  return e.first
                    ? function (e, t, n) {
                        for (; (e = e[l]); )
                          if (1 === e.nodeType || d) return o(e, t, n);
                        return !1;
                      }
                    : function (e, t, n) {
                        var i,
                          r,
                          a,
                          s = [S, h];
                        if (n) {
                          for (; (e = e[l]); )
                            if ((1 === e.nodeType || d) && o(e, t, n))
                              return !0;
                        } else
                          for (; (e = e[l]); )
                            if (1 === e.nodeType || d)
                              if (
                                ((r =
                                  (a = e[T] || (e[T] = {}))[e.uniqueID] ||
                                  (a[e.uniqueID] = {})),
                                u && u === e.nodeName.toLowerCase())
                              )
                                e = e[l] || e;
                              else {
                                if ((i = r[c]) && i[0] === S && i[1] === h)
                                  return (s[2] = i[2]);
                                if (((r[c] = s)[2] = o(e, t, n))) return !0;
                              }
                        return !1;
                      };
                }
                function xe(r) {
                  return 1 < r.length
                    ? function (e, t, n) {
                        for (var i = r.length; i--; )
                          if (!r[i](e, t, n)) return !1;
                        return !0;
                      }
                    : r[0];
                }
                function De(e, t, n, i, r) {
                  for (
                    var a, s = [], o = 0, l = e.length, u = null != t;
                    o < l;
                    o++
                  )
                    (a = e[o]) &&
                      ((n && !n(a, i, r)) || (s.push(a), u && t.push(o)));
                  return s;
                }
                function Ce(f, p, g, m, v, e) {
                  return (
                    m && !m[T] && (m = Ce(m)),
                    v && !v[T] && (v = Ce(v, e)),
                    ue(function (e, t, n, i) {
                      var r,
                        a,
                        s,
                        o = [],
                        l = [],
                        u = t.length,
                        c =
                          e ||
                          (function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++)
                              oe(e, t[i], n);
                            return n;
                          })(p || "*", n.nodeType ? [n] : n, []),
                        d = !f || (!e && p) ? c : De(c, o, f, n, i),
                        h = g ? (v || (e ? f : u || m) ? [] : t) : d;
                      if ((g && g(d, h, n, i), m))
                        for (r = De(h, l), m(r, [], n, i), a = r.length; a--; )
                          (s = r[a]) && (h[l[a]] = !(d[l[a]] = s));
                      if (e) {
                        if (v || f) {
                          if (v) {
                            for (r = [], a = h.length; a--; )
                              (s = h[a]) && r.push((d[a] = s));
                            v(null, (h = []), r, i);
                          }
                          for (a = h.length; a--; )
                            (s = h[a]) &&
                              -1 < (r = v ? F(e, s) : o[a]) &&
                              (e[r] = !(t[r] = s));
                        }
                      } else (h = De(h === t ? h.splice(u, h.length) : h)), v ? v(null, t, h, i) : q.apply(t, h);
                    })
                  );
                }
                function ke(e) {
                  for (
                    var r,
                      t,
                      n,
                      i = e.length,
                      a = w.relative[e[0].type],
                      s = a || w.relative[" "],
                      o = a ? 1 : 0,
                      l = we(
                        function (e) {
                          return e === r;
                        },
                        s,
                        !0
                      ),
                      u = we(
                        function (e) {
                          return -1 < F(r, e);
                        },
                        s,
                        !0
                      ),
                      c = [
                        function (e, t, n) {
                          var i =
                            (!a && (n || t !== x)) ||
                            ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                          return (r = null), i;
                        },
                      ];
                    o < i;
                    o++
                  )
                    if ((t = w.relative[e[o].type])) c = [we(xe(c), t)];
                    else {
                      if (
                        (t = w.filter[e[o].type].apply(null, e[o].matches))[T]
                      ) {
                        for (n = ++o; n < i && !w.relative[e[n].type]; n++);
                        return Ce(
                          1 < o && xe(c),
                          1 < o &&
                            be(
                              e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : "",
                              })
                            ).replace(W, "$1"),
                          t,
                          o < n && ke(e.slice(o, n)),
                          n < i && ke((e = e.slice(n))),
                          n < i && be(e)
                        );
                      }
                      c.push(t);
                    }
                  return xe(c);
                }
                return (
                  (ye.prototype = w.filters = w.pseudos),
                  (w.setFilters = new ye()),
                  (p = oe.tokenize =
                    function (e, t) {
                      var n,
                        i,
                        r,
                        a,
                        s,
                        o,
                        l,
                        u = b[e + " "];
                      if (u) return t ? 0 : u.slice(0);
                      for (s = e, o = [], l = w.preFilter; s; ) {
                        for (a in ((n && !(i = $.exec(s))) ||
                          (i && (s = s.slice(i[0].length) || s),
                          o.push((r = []))),
                        (n = !1),
                        (i = V.exec(s)) &&
                          ((n = i.shift()),
                          r.push({ value: n, type: i[0].replace(W, " ") }),
                          (s = s.slice(n.length))),
                        w.filter))
                          !(i = X[a].exec(s)) ||
                            (l[a] && !(i = l[a](i))) ||
                            ((n = i.shift()),
                            r.push({ value: n, type: a, matches: i }),
                            (s = s.slice(n.length)));
                        if (!n) break;
                      }
                      return t ? s.length : s ? oe.error(e) : b(e, o).slice(0);
                    }),
                  (d = oe.compile =
                    function (e, t) {
                      var n,
                        m,
                        v,
                        y,
                        b,
                        i,
                        r = [],
                        a = [],
                        s = E[e + " "];
                      if (!s) {
                        for (t || (t = p(e)), n = t.length; n--; )
                          (s = ke(t[n]))[T] ? r.push(s) : a.push(s);
                        (s = E(
                          e,
                          ((m = a),
                          (y = 0 < (v = r).length),
                          (b = 0 < m.length),
                          (i = function (e, t, n, i, r) {
                            var a,
                              s,
                              o,
                              l = 0,
                              u = "0",
                              c = e && [],
                              d = [],
                              h = x,
                              f = e || (b && w.find.TAG("*", r)),
                              p = (S += null == h ? 1 : Math.random() || 0.1),
                              g = f.length;
                            for (
                              r && (x = t === C || t || r);
                              u !== g && null != (a = f[u]);
                              u++
                            ) {
                              if (b && a) {
                                for (
                                  s = 0,
                                    t ||
                                      a.ownerDocument === C ||
                                      (D(a), (n = !k));
                                  (o = m[s++]);

                                )
                                  if (o(a, t || C, n)) {
                                    i.push(a);
                                    break;
                                  }
                                r && (S = p);
                              }
                              y && ((a = !o && a) && l--, e && c.push(a));
                            }
                            if (((l += u), y && u !== l)) {
                              for (s = 0; (o = v[s++]); ) o(c, d, t, n);
                              if (e) {
                                if (0 < l)
                                  for (; u--; )
                                    c[u] || d[u] || (d[u] = j.call(i));
                                d = De(d);
                              }
                              q.apply(i, d),
                                r &&
                                  !e &&
                                  0 < d.length &&
                                  1 < l + v.length &&
                                  oe.uniqueSort(i);
                            }
                            return r && ((S = p), (x = h)), c;
                          }),
                          y ? ue(i) : i)
                        )).selector = e;
                      }
                      return s;
                    }),
                  (g = oe.select =
                    function (e, t, n, i) {
                      var r,
                        a,
                        s,
                        o,
                        l,
                        u = "function" == typeof e && e,
                        c = !i && p((e = u.selector || e));
                      if (((n = n || []), 1 === c.length)) {
                        if (
                          2 < (a = c[0] = c[0].slice(0)).length &&
                          "ID" === (s = a[0]).type &&
                          9 === t.nodeType &&
                          k &&
                          w.relative[a[1].type]
                        ) {
                          if (
                            !(t = (w.find.ID(s.matches[0].replace(te, ne), t) ||
                              [])[0])
                          )
                            return n;
                          u && (t = t.parentNode),
                            (e = e.slice(a.shift().value.length));
                        }
                        for (
                          r = X.needsContext.test(e) ? 0 : a.length;
                          r-- && ((s = a[r]), !w.relative[(o = s.type)]);

                        )
                          if (
                            (l = w.find[o]) &&
                            (i = l(
                              s.matches[0].replace(te, ne),
                              (ee.test(a[0].type) && ve(t.parentNode)) || t
                            ))
                          ) {
                            if ((a.splice(r, 1), !(e = i.length && be(a))))
                              return q.apply(n, i), n;
                            break;
                          }
                      }
                      return (
                        (u || d(e, c))(
                          i,
                          t,
                          !k,
                          n,
                          !t || (ee.test(e) && ve(t.parentNode)) || t
                        ),
                        n
                      );
                    }),
                  (f.sortStable = T.split("").sort(N).join("") === T),
                  (f.detectDuplicates = !!u),
                  D(),
                  (f.sortDetached = ce(function (e) {
                    return (
                      1 & e.compareDocumentPosition(C.createElement("fieldset"))
                    );
                  })),
                  ce(function (e) {
                    return (
                      (e.innerHTML = "<a href='#'></a>"),
                      "#" === e.firstChild.getAttribute("href")
                    );
                  }) ||
                    de("type|href|height|width", function (e, t, n) {
                      if (!n)
                        return e.getAttribute(
                          t,
                          "type" === t.toLowerCase() ? 1 : 2
                        );
                    }),
                  (f.attributes &&
                    ce(function (e) {
                      return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                      );
                    })) ||
                    de("value", function (e, t, n) {
                      if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                    }),
                  ce(function (e) {
                    return null == e.getAttribute("disabled");
                  }) ||
                    de(O, function (e, t, n) {
                      var i;
                      if (!n)
                        return !0 === e[t]
                          ? t.toLowerCase()
                          : (i = e.getAttributeNode(t)) && i.specified
                          ? i.value
                          : null;
                    }),
                  oe
                );
              })(C);
              (T.find = f),
                (T.expr = f.selectors),
                (T.expr[":"] = T.expr.pseudos),
                (T.uniqueSort = T.unique = f.uniqueSort),
                (T.text = f.getText),
                (T.isXMLDoc = f.isXML),
                (T.contains = f.contains),
                (T.escapeSelector = f.escape);
              var p = function (e, t, n) {
                  for (
                    var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;

                  )
                    if (1 === e.nodeType) {
                      if (r && T(e).is(n)) break;
                      i.push(e);
                    }
                  return i;
                },
                D = function (e, t) {
                  for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                  return n;
                },
                S = T.expr.match.needsContext;
              function E(e, t) {
                return (
                  e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                );
              }
              var A =
                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
              function N(e, n, i) {
                return y(n)
                  ? T.grep(e, function (e, t) {
                      return !!n.call(e, t, e) !== i;
                    })
                  : n.nodeType
                  ? T.grep(e, function (e) {
                      return (e === n) !== i;
                    })
                  : "string" != typeof n
                  ? T.grep(e, function (e) {
                      return -1 < r.call(n, e) !== i;
                    })
                  : T.filter(n, e, i);
              }
              (T.filter = function (e, t, n) {
                var i = t[0];
                return (
                  n && (e = ":not(" + e + ")"),
                  1 === t.length && 1 === i.nodeType
                    ? T.find.matchesSelector(i, e)
                      ? [i]
                      : []
                    : T.find.matches(
                        e,
                        T.grep(t, function (e) {
                          return 1 === e.nodeType;
                        })
                      )
                );
              }),
                T.fn.extend({
                  find: function (e) {
                    var t,
                      n,
                      i = this.length,
                      r = this;
                    if ("string" != typeof e)
                      return this.pushStack(
                        T(e).filter(function () {
                          for (t = 0; t < i; t++)
                            if (T.contains(r[t], this)) return !0;
                        })
                      );
                    for (n = this.pushStack([]), t = 0; t < i; t++)
                      T.find(e, r[t], n);
                    return 1 < i ? T.uniqueSort(n) : n;
                  },
                  filter: function (e) {
                    return this.pushStack(N(this, e || [], !1));
                  },
                  not: function (e) {
                    return this.pushStack(N(this, e || [], !0));
                  },
                  is: function (e) {
                    return !!N(
                      this,
                      "string" == typeof e && S.test(e) ? T(e) : e || [],
                      !1
                    ).length;
                  },
                });
              var M,
                j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
              ((T.fn.init = function (e, t, n) {
                var i, r;
                if (!e) return this;
                if (((n = n || M), "string" != typeof e))
                  return e.nodeType
                    ? ((this[0] = e), (this.length = 1), this)
                    : y(e)
                    ? void 0 !== n.ready
                      ? n.ready(e)
                      : e(T)
                    : T.makeArray(e, this);
                if (
                  !(i =
                    "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                      ? [null, e, null]
                      : j.exec(e)) ||
                  (!i[1] && t)
                )
                  return !t || t.jquery
                    ? (t || n).find(e)
                    : this.constructor(t).find(e);
                if (i[1]) {
                  if (
                    ((t = t instanceof T ? t[0] : t),
                    T.merge(
                      this,
                      T.parseHTML(
                        i[1],
                        t && t.nodeType ? t.ownerDocument || t : k,
                        !0
                      )
                    ),
                    A.test(i[1]) && T.isPlainObject(t))
                  )
                    for (i in t)
                      y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                  return this;
                }
                return (
                  (r = k.getElementById(i[2])) &&
                    ((this[0] = r), (this.length = 1)),
                  this
                );
              }).prototype = T.fn),
                (M = T(k));
              var _ = /^(?:parents|prev(?:Until|All))/,
                q = { children: !0, contents: !0, next: !0, prev: !0 };
              function L(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
              }
              T.fn.extend({
                has: function (e) {
                  var t = T(e, this),
                    n = t.length;
                  return this.filter(function () {
                    for (var e = 0; e < n; e++)
                      if (T.contains(this, t[e])) return !0;
                  });
                },
                closest: function (e, t) {
                  var n,
                    i = 0,
                    r = this.length,
                    a = [],
                    s = "string" != typeof e && T(e);
                  if (!S.test(e))
                    for (; i < r; i++)
                      for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (
                          n.nodeType < 11 &&
                          (s
                            ? -1 < s.index(n)
                            : 1 === n.nodeType && T.find.matchesSelector(n, e))
                        ) {
                          a.push(n);
                          break;
                        }
                  return this.pushStack(1 < a.length ? T.uniqueSort(a) : a);
                },
                index: function (e) {
                  return e
                    ? "string" == typeof e
                      ? r.call(T(e), this[0])
                      : r.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
                },
                add: function (e, t) {
                  return this.pushStack(
                    T.uniqueSort(T.merge(this.get(), T(e, t)))
                  );
                },
                addBack: function (e) {
                  return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                  );
                },
              }),
                T.each(
                  {
                    parent: function (e) {
                      var t = e.parentNode;
                      return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function (e) {
                      return p(e, "parentNode");
                    },
                    parentsUntil: function (e, t, n) {
                      return p(e, "parentNode", n);
                    },
                    next: function (e) {
                      return L(e, "nextSibling");
                    },
                    prev: function (e) {
                      return L(e, "previousSibling");
                    },
                    nextAll: function (e) {
                      return p(e, "nextSibling");
                    },
                    prevAll: function (e) {
                      return p(e, "previousSibling");
                    },
                    nextUntil: function (e, t, n) {
                      return p(e, "nextSibling", n);
                    },
                    prevUntil: function (e, t, n) {
                      return p(e, "previousSibling", n);
                    },
                    siblings: function (e) {
                      return D((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                      return D(e.firstChild);
                    },
                    contents: function (e) {
                      return void 0 !== e.contentDocument
                        ? e.contentDocument
                        : (E(e, "template") && (e = e.content || e),
                          T.merge([], e.childNodes));
                    },
                  },
                  function (i, r) {
                    T.fn[i] = function (e, t) {
                      var n = T.map(this, r, e);
                      return (
                        "Until" !== i.slice(-5) && (t = e),
                        t && "string" == typeof t && (n = T.filter(t, n)),
                        1 < this.length &&
                          (q[i] || T.uniqueSort(n), _.test(i) && n.reverse()),
                        this.pushStack(n)
                      );
                    };
                  }
                );
              var F = /[^\x20\t\r\n\f]+/g;
              function O(e) {
                return e;
              }
              function R(e) {
                throw e;
              }
              function U(e, t, n, i) {
                var r;
                try {
                  e && y((r = e.promise))
                    ? r.call(e).done(t).fail(n)
                    : e && y((r = e.then))
                    ? r.call(e, t, n)
                    : t.apply(void 0, [e].slice(i));
                } catch (e) {
                  n.apply(void 0, [e]);
                }
              }
              (T.Callbacks = function (i) {
                var e, n;
                i =
                  "string" == typeof i
                    ? ((e = i),
                      (n = {}),
                      T.each(e.match(F) || [], function (e, t) {
                        n[t] = !0;
                      }),
                      n)
                    : T.extend({}, i);
                var r,
                  t,
                  a,
                  s,
                  o = [],
                  l = [],
                  u = -1,
                  c = function () {
                    for (s = s || i.once, a = r = !0; l.length; u = -1)
                      for (t = l.shift(); ++u < o.length; )
                        !1 === o[u].apply(t[0], t[1]) &&
                          i.stopOnFalse &&
                          ((u = o.length), (t = !1));
                    i.memory || (t = !1), (r = !1), s && (o = t ? [] : "");
                  },
                  d = {
                    add: function () {
                      return (
                        o &&
                          (t && !r && ((u = o.length - 1), l.push(t)),
                          (function n(e) {
                            T.each(e, function (e, t) {
                              y(t)
                                ? (i.unique && d.has(t)) || o.push(t)
                                : t && t.length && "string" !== x(t) && n(t);
                            });
                          })(arguments),
                          t && !r && c()),
                        this
                      );
                    },
                    remove: function () {
                      return (
                        T.each(arguments, function (e, t) {
                          for (var n; -1 < (n = T.inArray(t, o, n)); )
                            o.splice(n, 1), n <= u && u--;
                        }),
                        this
                      );
                    },
                    has: function (e) {
                      return e ? -1 < T.inArray(e, o) : 0 < o.length;
                    },
                    empty: function () {
                      return o && (o = []), this;
                    },
                    disable: function () {
                      return (s = l = []), (o = t = ""), this;
                    },
                    disabled: function () {
                      return !o;
                    },
                    lock: function () {
                      return (s = l = []), t || r || (o = t = ""), this;
                    },
                    locked: function () {
                      return !!s;
                    },
                    fireWith: function (e, t) {
                      return (
                        s ||
                          ((t = [e, (t = t || []).slice ? t.slice() : t]),
                          l.push(t),
                          r || c()),
                        this
                      );
                    },
                    fire: function () {
                      return d.fireWith(this, arguments), this;
                    },
                    fired: function () {
                      return !!a;
                    },
                  };
                return d;
              }),
                T.extend({
                  Deferred: function (e) {
                    var a = [
                        [
                          "notify",
                          "progress",
                          T.Callbacks("memory"),
                          T.Callbacks("memory"),
                          2,
                        ],
                        [
                          "resolve",
                          "done",
                          T.Callbacks("once memory"),
                          T.Callbacks("once memory"),
                          0,
                          "resolved",
                        ],
                        [
                          "reject",
                          "fail",
                          T.Callbacks("once memory"),
                          T.Callbacks("once memory"),
                          1,
                          "rejected",
                        ],
                      ],
                      r = "pending",
                      s = {
                        state: function () {
                          return r;
                        },
                        always: function () {
                          return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                          return s.then(null, e);
                        },
                        pipe: function () {
                          var r = arguments;
                          return T.Deferred(function (i) {
                            T.each(a, function (e, t) {
                              var n = y(r[t[4]]) && r[t[4]];
                              o[t[1]](function () {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise)
                                  ? e
                                      .promise()
                                      .progress(i.notify)
                                      .done(i.resolve)
                                      .fail(i.reject)
                                  : i[t[0] + "With"](this, n ? [e] : arguments);
                              });
                            }),
                              (r = null);
                          }).promise();
                        },
                        then: function (t, n, i) {
                          var l = 0;
                          function u(r, a, s, o) {
                            return function () {
                              var n = this,
                                i = arguments,
                                e = function () {
                                  var e, t;
                                  if (!(r < l)) {
                                    if ((e = s.apply(n, i)) === a.promise())
                                      throw new TypeError(
                                        "Thenable self-resolution"
                                      );
                                    (t =
                                      e &&
                                      ("object" == typeof e ||
                                        "function" == typeof e) &&
                                      e.then),
                                      y(t)
                                        ? o
                                          ? t.call(
                                              e,
                                              u(l, a, O, o),
                                              u(l, a, R, o)
                                            )
                                          : (l++,
                                            t.call(
                                              e,
                                              u(l, a, O, o),
                                              u(l, a, R, o),
                                              u(l, a, O, a.notifyWith)
                                            ))
                                        : (s !== O && ((n = void 0), (i = [e])),
                                          (o || a.resolveWith)(n, i));
                                  }
                                },
                                t = o
                                  ? e
                                  : function () {
                                      try {
                                        e();
                                      } catch (e) {
                                        T.Deferred.exceptionHook &&
                                          T.Deferred.exceptionHook(
                                            e,
                                            t.stackTrace
                                          ),
                                          l <= r + 1 &&
                                            (s !== R &&
                                              ((n = void 0), (i = [e])),
                                            a.rejectWith(n, i));
                                      }
                                    };
                              r
                                ? t()
                                : (T.Deferred.getStackHook &&
                                    (t.stackTrace = T.Deferred.getStackHook()),
                                  C.setTimeout(t));
                            };
                          }
                          return T.Deferred(function (e) {
                            a[0][3].add(u(0, e, y(i) ? i : O, e.notifyWith)),
                              a[1][3].add(u(0, e, y(t) ? t : O)),
                              a[2][3].add(u(0, e, y(n) ? n : R));
                          }).promise();
                        },
                        promise: function (e) {
                          return null != e ? T.extend(e, s) : s;
                        },
                      },
                      o = {};
                    return (
                      T.each(a, function (e, t) {
                        var n = t[2],
                          i = t[5];
                        (s[t[1]] = n.add),
                          i &&
                            n.add(
                              function () {
                                r = i;
                              },
                              a[3 - e][2].disable,
                              a[3 - e][3].disable,
                              a[0][2].lock,
                              a[0][3].lock
                            ),
                          n.add(t[3].fire),
                          (o[t[0]] = function () {
                            return (
                              o[t[0] + "With"](
                                this === o ? void 0 : this,
                                arguments
                              ),
                              this
                            );
                          }),
                          (o[t[0] + "With"] = n.fireWith);
                      }),
                      s.promise(o),
                      e && e.call(o, o),
                      o
                    );
                  },
                  when: function (e) {
                    var n = arguments.length,
                      t = n,
                      i = Array(t),
                      r = o.call(arguments),
                      a = T.Deferred(),
                      s = function (t) {
                        return function (e) {
                          (i[t] = this),
                            (r[t] =
                              1 < arguments.length ? o.call(arguments) : e),
                            --n || a.resolveWith(i, r);
                        };
                      };
                    if (
                      n <= 1 &&
                      (U(e, a.done(s(t)).resolve, a.reject, !n),
                      "pending" === a.state() || y(r[t] && r[t].then))
                    )
                      return a.then();
                    for (; t--; ) U(r[t], s(t), a.reject);
                    return a.promise();
                  },
                });
              var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
              (T.Deferred.exceptionHook = function (e, t) {
                C.console &&
                  C.console.warn &&
                  e &&
                  H.test(e.name) &&
                  C.console.warn(
                    "jQuery.Deferred exception: " + e.message,
                    e.stack,
                    t
                  );
              }),
                (T.readyException = function (e) {
                  C.setTimeout(function () {
                    throw e;
                  });
                });
              var I = T.Deferred();
              function P() {
                k.removeEventListener("DOMContentLoaded", P),
                  C.removeEventListener("load", P),
                  T.ready();
              }
              (T.fn.ready = function (e) {
                return (
                  I.then(e).catch(function (e) {
                    T.readyException(e);
                  }),
                  this
                );
              }),
                T.extend({
                  isReady: !1,
                  readyWait: 1,
                  ready: function (e) {
                    (!0 === e ? --T.readyWait : T.isReady) ||
                      ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
                      I.resolveWith(k, [T]);
                  },
                }),
                (T.ready.then = I.then),
                "complete" === k.readyState ||
                ("loading" !== k.readyState && !k.documentElement.doScroll)
                  ? C.setTimeout(T.ready)
                  : (k.addEventListener("DOMContentLoaded", P),
                    C.addEventListener("load", P));
              var W = function (e, t, n, i, r, a, s) {
                  var o = 0,
                    l = e.length,
                    u = null == n;
                  if ("object" === x(n))
                    for (o in ((r = !0), n)) W(e, t, o, n[o], !0, a, s);
                  else if (
                    void 0 !== i &&
                    ((r = !0),
                    y(i) || (s = !0),
                    u &&
                      (t = s
                        ? (t.call(e, i), null)
                        : ((u = t),
                          function (e, t, n) {
                            return u.call(T(e), n);
                          })),
                    t)
                  )
                    for (; o < l; o++)
                      t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
                  return r ? e : u ? t.call(e) : l ? t(e[0], n) : a;
                },
                $ = /^-ms-/,
                V = /-([a-z])/g;
              function z(e, t) {
                return t.toUpperCase();
              }
              function B(e) {
                return e.replace($, "ms-").replace(V, z);
              }
              var Y = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
              };
              function X() {
                this.expando = T.expando + X.uid++;
              }
              (X.uid = 1),
                (X.prototype = {
                  cache: function (e) {
                    var t = e[this.expando];
                    return (
                      t ||
                        ((t = {}),
                        Y(e) &&
                          (e.nodeType
                            ? (e[this.expando] = t)
                            : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0,
                              }))),
                      t
                    );
                  },
                  set: function (e, t, n) {
                    var i,
                      r = this.cache(e);
                    if ("string" == typeof t) r[B(t)] = n;
                    else for (i in t) r[B(i)] = t[i];
                    return r;
                  },
                  get: function (e, t) {
                    return void 0 === t
                      ? this.cache(e)
                      : e[this.expando] && e[this.expando][B(t)];
                  },
                  access: function (e, t, n) {
                    return void 0 === t ||
                      (t && "string" == typeof t && void 0 === n)
                      ? this.get(e, t)
                      : (this.set(e, t, n), void 0 !== n ? n : t);
                  },
                  remove: function (e, t) {
                    var n,
                      i = e[this.expando];
                    if (void 0 !== i) {
                      if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                          ? t.map(B)
                          : (t = B(t)) in i
                          ? [t]
                          : t.match(F) || []).length;
                        for (; n--; ) delete i[t[n]];
                      }
                      (void 0 === t || T.isEmptyObject(i)) &&
                        (e.nodeType
                          ? (e[this.expando] = void 0)
                          : delete e[this.expando]);
                    }
                  },
                  hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !T.isEmptyObject(t);
                  },
                });
              var J = new X(),
                G = new X(),
                Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Q = /[A-Z]/g;
              function K(e, t, n) {
                var i, r;
                if (void 0 === n && 1 === e.nodeType)
                  if (
                    ((i = "data-" + t.replace(Q, "-$&").toLowerCase()),
                    "string" == typeof (n = e.getAttribute(i)))
                  ) {
                    try {
                      n =
                        "true" === (r = n) ||
                        ("false" !== r &&
                          ("null" === r
                            ? null
                            : r === +r + ""
                            ? +r
                            : Z.test(r)
                            ? JSON.parse(r)
                            : r));
                    } catch (e) {}
                    G.set(e, t, n);
                  } else n = void 0;
                return n;
              }
              T.extend({
                hasData: function (e) {
                  return G.hasData(e) || J.hasData(e);
                },
                data: function (e, t, n) {
                  return G.access(e, t, n);
                },
                removeData: function (e, t) {
                  G.remove(e, t);
                },
                _data: function (e, t, n) {
                  return J.access(e, t, n);
                },
                _removeData: function (e, t) {
                  J.remove(e, t);
                },
              }),
                T.fn.extend({
                  data: function (n, e) {
                    var t,
                      i,
                      r,
                      a = this[0],
                      s = a && a.attributes;
                    if (void 0 !== n)
                      return "object" == typeof n
                        ? this.each(function () {
                            G.set(this, n);
                          })
                        : W(
                            this,
                            function (e) {
                              var t;
                              if (a && void 0 === e)
                                return void 0 !== (t = G.get(a, n))
                                  ? t
                                  : void 0 !== (t = K(a, n))
                                  ? t
                                  : void 0;
                              this.each(function () {
                                G.set(this, n, e);
                              });
                            },
                            null,
                            e,
                            1 < arguments.length,
                            null,
                            !0
                          );
                    if (
                      this.length &&
                      ((r = G.get(a)),
                      1 === a.nodeType && !J.get(a, "hasDataAttrs"))
                    ) {
                      for (t = s.length; t--; )
                        s[t] &&
                          0 === (i = s[t].name).indexOf("data-") &&
                          ((i = B(i.slice(5))), K(a, i, r[i]));
                      J.set(a, "hasDataAttrs", !0);
                    }
                    return r;
                  },
                  removeData: function (e) {
                    return this.each(function () {
                      G.remove(this, e);
                    });
                  },
                }),
                T.extend({
                  queue: function (e, t, n) {
                    var i;
                    if (e)
                      return (
                        (t = (t || "fx") + "queue"),
                        (i = J.get(e, t)),
                        n &&
                          (!i || Array.isArray(n)
                            ? (i = J.access(e, t, T.makeArray(n)))
                            : i.push(n)),
                        i || []
                      );
                  },
                  dequeue: function (e, t) {
                    t = t || "fx";
                    var n = T.queue(e, t),
                      i = n.length,
                      r = n.shift(),
                      a = T._queueHooks(e, t);
                    "inprogress" === r && ((r = n.shift()), i--),
                      r &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete a.stop,
                        r.call(
                          e,
                          function () {
                            T.dequeue(e, t);
                          },
                          a
                        )),
                      !i && a && a.empty.fire();
                  },
                  _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return (
                      J.get(e, n) ||
                      J.access(e, n, {
                        empty: T.Callbacks("once memory").add(function () {
                          J.remove(e, [t + "queue", n]);
                        }),
                      })
                    );
                  },
                }),
                T.fn.extend({
                  queue: function (t, n) {
                    var e = 2;
                    return (
                      "string" != typeof t && ((n = t), (t = "fx"), e--),
                      arguments.length < e
                        ? T.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                            var e = T.queue(this, t, n);
                            T._queueHooks(this, t),
                              "fx" === t &&
                                "inprogress" !== e[0] &&
                                T.dequeue(this, t);
                          })
                    );
                  },
                  dequeue: function (e) {
                    return this.each(function () {
                      T.dequeue(this, e);
                    });
                  },
                  clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                  },
                  promise: function (e, t) {
                    var n,
                      i = 1,
                      r = T.Deferred(),
                      a = this,
                      s = this.length,
                      o = function () {
                        --i || r.resolveWith(a, [a]);
                      };
                    for (
                      "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                      s--;

                    )
                      (n = J.get(a[s], e + "queueHooks")) &&
                        n.empty &&
                        (i++, n.empty.add(o));
                    return o(), r.promise(t);
                  },
                });
              var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                ne = ["Top", "Right", "Bottom", "Left"],
                ie = k.documentElement,
                re = function (e) {
                  return T.contains(e.ownerDocument, e);
                },
                ae = { composed: !0 };
              ie.getRootNode &&
                (re = function (e) {
                  return (
                    T.contains(e.ownerDocument, e) ||
                    e.getRootNode(ae) === e.ownerDocument
                  );
                });
              var se = function (e, t) {
                  return (
                    "none" === (e = t || e).style.display ||
                    ("" === e.style.display &&
                      re(e) &&
                      "none" === T.css(e, "display"))
                  );
                },
                oe = function (e, t, n, i) {
                  var r,
                    a,
                    s = {};
                  for (a in t) (s[a] = e.style[a]), (e.style[a] = t[a]);
                  for (a in ((r = n.apply(e, i || [])), t)) e.style[a] = s[a];
                  return r;
                };
              function le(e, t, n, i) {
                var r,
                  a,
                  s = 20,
                  o = i
                    ? function () {
                        return i.cur();
                      }
                    : function () {
                        return T.css(e, t, "");
                      },
                  l = o(),
                  u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
                  c =
                    e.nodeType &&
                    (T.cssNumber[t] || ("px" !== u && +l)) &&
                    te.exec(T.css(e, t));
                if (c && c[3] !== u) {
                  for (l /= 2, u = u || c[3], c = +l || 1; s--; )
                    T.style(e, t, c + u),
                      (1 - a) * (1 - (a = o() / l || 0.5)) <= 0 && (s = 0),
                      (c /= a);
                  (c *= 2), T.style(e, t, c + u), (n = n || []);
                }
                return (
                  n &&
                    ((c = +c || +l || 0),
                    (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                    i && ((i.unit = u), (i.start = c), (i.end = r))),
                  r
                );
              }
              var ue = {};
              function ce(e, t) {
                for (
                  var n, i, r, a, s, o, l, u = [], c = 0, d = e.length;
                  c < d;
                  c++
                )
                  (i = e[c]).style &&
                    ((n = i.style.display),
                    t
                      ? ("none" === n &&
                          ((u[c] = J.get(i, "display") || null),
                          u[c] || (i.style.display = "")),
                        "" === i.style.display &&
                          se(i) &&
                          (u[c] =
                            ((l = s = a = void 0),
                            (s = (r = i).ownerDocument),
                            (o = r.nodeName),
                            (l = ue[o]) ||
                              ((a = s.body.appendChild(s.createElement(o))),
                              (l = T.css(a, "display")),
                              a.parentNode.removeChild(a),
                              "none" === l && (l = "block"),
                              (ue[o] = l)))))
                      : "none" !== n &&
                        ((u[c] = "none"), J.set(i, "display", n)));
                for (c = 0; c < d; c++)
                  null != u[c] && (e[c].style.display = u[c]);
                return e;
              }
              T.fn.extend({
                show: function () {
                  return ce(this, !0);
                },
                hide: function () {
                  return ce(this);
                },
                toggle: function (e) {
                  return "boolean" == typeof e
                    ? e
                      ? this.show()
                      : this.hide()
                    : this.each(function () {
                        se(this) ? T(this).show() : T(this).hide();
                      });
                },
              });
              var de = /^(?:checkbox|radio)$/i,
                he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                fe = /^$|^module$|\/(?:java|ecma)script/i,
                pe = {
                  option: [1, "<select multiple='multiple'>", "</select>"],
                  thead: [1, "<table>", "</table>"],
                  col: [2, "<table><colgroup>", "</colgroup></table>"],
                  tr: [2, "<table><tbody>", "</tbody></table>"],
                  td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                  _default: [0, "", ""],
                };
              function ge(e, t) {
                var n;
                return (
                  (n =
                    void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t || "*")
                      : void 0 !== e.querySelectorAll
                      ? e.querySelectorAll(t || "*")
                      : []),
                  void 0 === t || (t && E(e, t)) ? T.merge([e], n) : n
                );
              }
              function me(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
              }
              (pe.optgroup = pe.option),
                (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead),
                (pe.th = pe.td);
              var ve,
                ye,
                be = /<|&#?\w+;/;
              function we(e, t, n, i, r) {
                for (
                  var a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = t.createDocumentFragment(),
                    h = [],
                    f = 0,
                    p = e.length;
                  f < p;
                  f++
                )
                  if ((a = e[f]) || 0 === a)
                    if ("object" === x(a)) T.merge(h, a.nodeType ? [a] : a);
                    else if (be.test(a)) {
                      for (
                        s = s || d.appendChild(t.createElement("div")),
                          o = (he.exec(a) || ["", ""])[1].toLowerCase(),
                          l = pe[o] || pe._default,
                          s.innerHTML = l[1] + T.htmlPrefilter(a) + l[2],
                          c = l[0];
                        c--;

                      )
                        s = s.lastChild;
                      T.merge(h, s.childNodes),
                        ((s = d.firstChild).textContent = "");
                    } else h.push(t.createTextNode(a));
                for (d.textContent = "", f = 0; (a = h[f++]); )
                  if (i && -1 < T.inArray(a, i)) r && r.push(a);
                  else if (
                    ((u = re(a)),
                    (s = ge(d.appendChild(a), "script")),
                    u && me(s),
                    n)
                  )
                    for (c = 0; (a = s[c++]); )
                      fe.test(a.type || "") && n.push(a);
                return d;
              }
              (ve = k
                .createDocumentFragment()
                .appendChild(k.createElement("div"))),
                (ye = k.createElement("input")).setAttribute("type", "radio"),
                ye.setAttribute("checked", "checked"),
                ye.setAttribute("name", "t"),
                ve.appendChild(ye),
                (v.checkClone = ve
                  .cloneNode(!0)
                  .cloneNode(!0).lastChild.checked),
                (ve.innerHTML = "<textarea>x</textarea>"),
                (v.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue);
              var xe = /^key/,
                De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;
              function ke() {
                return !0;
              }
              function Te() {
                return !1;
              }
              function Se(e, t) {
                return (
                  (e ===
                    (function () {
                      try {
                        return k.activeElement;
                      } catch (e) {}
                    })()) ==
                  ("focus" === t)
                );
              }
              function Ee(e, t, n, i, r, a) {
                var s, o;
                if ("object" == typeof t) {
                  for (o in ("string" != typeof n &&
                    ((i = i || n), (n = void 0)),
                  t))
                    Ee(e, o, n, i, t[o], a);
                  return e;
                }
                if (
                  (null == i && null == r
                    ? ((r = n), (i = n = void 0))
                    : null == r &&
                      ("string" == typeof n
                        ? ((r = i), (i = void 0))
                        : ((r = i), (i = n), (n = void 0))),
                  !1 === r)
                )
                  r = Te;
                else if (!r) return e;
                return (
                  1 === a &&
                    ((s = r),
                    ((r = function (e) {
                      return T().off(e), s.apply(this, arguments);
                    }).guid = s.guid || (s.guid = T.guid++))),
                  e.each(function () {
                    T.event.add(this, t, r, i, n);
                  })
                );
              }
              function Ae(e, r, a) {
                a
                  ? (J.set(e, r, !1),
                    T.event.add(e, r, {
                      namespace: !1,
                      handler: function (e) {
                        var t,
                          n,
                          i = J.get(this, r);
                        if (1 & e.isTrigger && this[r]) {
                          if (i.length)
                            (T.event.special[r] || {}).delegateType &&
                              e.stopPropagation();
                          else if (
                            ((i = o.call(arguments)),
                            J.set(this, r, i),
                            (t = a(this, r)),
                            this[r](),
                            i !== (n = J.get(this, r)) || t
                              ? J.set(this, r, !1)
                              : (n = {}),
                            i !== n)
                          )
                            return (
                              e.stopImmediatePropagation(),
                              e.preventDefault(),
                              n.value
                            );
                        } else
                          i.length &&
                            (J.set(this, r, {
                              value: T.event.trigger(
                                T.extend(i[0], T.Event.prototype),
                                i.slice(1),
                                this
                              ),
                            }),
                            e.stopImmediatePropagation());
                      },
                    }))
                  : void 0 === J.get(e, r) && T.event.add(e, r, ke);
              }
              (T.event = {
                global: {},
                add: function (t, e, n, i, r) {
                  var a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    h,
                    f,
                    p,
                    g,
                    m = J.get(t);
                  if (m)
                    for (
                      n.handler && ((n = (a = n).handler), (r = a.selector)),
                        r && T.find.matchesSelector(ie, r),
                        n.guid || (n.guid = T.guid++),
                        (l = m.events) || (l = m.events = {}),
                        (s = m.handle) ||
                          (s = m.handle =
                            function (e) {
                              return void 0 !== T &&
                                T.event.triggered !== e.type
                                ? T.event.dispatch.apply(t, arguments)
                                : void 0;
                            }),
                        u = (e = (e || "").match(F) || [""]).length;
                      u--;

                    )
                      (f = g = (o = Ce.exec(e[u]) || [])[1]),
                        (p = (o[2] || "").split(".").sort()),
                        f &&
                          ((d = T.event.special[f] || {}),
                          (f = (r ? d.delegateType : d.bindType) || f),
                          (d = T.event.special[f] || {}),
                          (c = T.extend(
                            {
                              type: f,
                              origType: g,
                              data: i,
                              handler: n,
                              guid: n.guid,
                              selector: r,
                              needsContext:
                                r && T.expr.match.needsContext.test(r),
                              namespace: p.join("."),
                            },
                            a
                          )),
                          (h = l[f]) ||
                            (((h = l[f] = []).delegateCount = 0),
                            (d.setup && !1 !== d.setup.call(t, i, p, s)) ||
                              (t.addEventListener && t.addEventListener(f, s))),
                          d.add &&
                            (d.add.call(t, c),
                            c.handler.guid || (c.handler.guid = n.guid)),
                          r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                          (T.event.global[f] = !0));
                },
                remove: function (e, t, n, i, r) {
                  var a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    h,
                    f,
                    p,
                    g,
                    m = J.hasData(e) && J.get(e);
                  if (m && (l = m.events)) {
                    for (u = (t = (t || "").match(F) || [""]).length; u--; )
                      if (
                        ((f = g = (o = Ce.exec(t[u]) || [])[1]),
                        (p = (o[2] || "").split(".").sort()),
                        f)
                      ) {
                        for (
                          d = T.event.special[f] || {},
                            h =
                              l[(f = (i ? d.delegateType : d.bindType) || f)] ||
                              [],
                            o =
                              o[2] &&
                              new RegExp(
                                "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                              ),
                            s = a = h.length;
                          a--;

                        )
                          (c = h[a]),
                            (!r && g !== c.origType) ||
                              (n && n.guid !== c.guid) ||
                              (o && !o.test(c.namespace)) ||
                              (i &&
                                i !== c.selector &&
                                ("**" !== i || !c.selector)) ||
                              (h.splice(a, 1),
                              c.selector && h.delegateCount--,
                              d.remove && d.remove.call(e, c));
                        s &&
                          !h.length &&
                          ((d.teardown &&
                            !1 !== d.teardown.call(e, p, m.handle)) ||
                            T.removeEvent(e, f, m.handle),
                          delete l[f]);
                      } else for (f in l) T.event.remove(e, f + t[u], n, i, !0);
                    T.isEmptyObject(l) && J.remove(e, "handle events");
                  }
                },
                dispatch: function (e) {
                  var t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    o = T.event.fix(e),
                    l = new Array(arguments.length),
                    u = (J.get(this, "events") || {})[o.type] || [],
                    c = T.event.special[o.type] || {};
                  for (l[0] = o, t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                  if (
                    ((o.delegateTarget = this),
                    !c.preDispatch || !1 !== c.preDispatch.call(this, o))
                  ) {
                    for (
                      s = T.event.handlers.call(this, o, u), t = 0;
                      (r = s[t++]) && !o.isPropagationStopped();

                    )
                      for (
                        o.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) &&
                        !o.isImmediatePropagationStopped();

                      )
                        (o.rnamespace &&
                          !1 !== a.namespace &&
                          !o.rnamespace.test(a.namespace)) ||
                          ((o.handleObj = a),
                          (o.data = a.data),
                          void 0 !==
                            (i = (
                              (T.event.special[a.origType] || {}).handle ||
                              a.handler
                            ).apply(r.elem, l)) &&
                            !1 === (o.result = i) &&
                            (o.preventDefault(), o.stopPropagation()));
                    return (
                      c.postDispatch && c.postDispatch.call(this, o), o.result
                    );
                  }
                },
                handlers: function (e, t) {
                  var n,
                    i,
                    r,
                    a,
                    s,
                    o = [],
                    l = t.delegateCount,
                    u = e.target;
                  if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; u !== this; u = u.parentNode || this)
                      if (
                        1 === u.nodeType &&
                        ("click" !== e.type || !0 !== u.disabled)
                      ) {
                        for (a = [], s = {}, n = 0; n < l; n++)
                          void 0 === s[(r = (i = t[n]).selector + " ")] &&
                            (s[r] = i.needsContext
                              ? -1 < T(r, this).index(u)
                              : T.find(r, this, null, [u]).length),
                            s[r] && a.push(i);
                        a.length && o.push({ elem: u, handlers: a });
                      }
                  return (
                    (u = this),
                    l < t.length && o.push({ elem: u, handlers: t.slice(l) }),
                    o
                  );
                },
                addProp: function (t, e) {
                  Object.defineProperty(T.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(e)
                      ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                        }
                      : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                        },
                    set: function (e) {
                      Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                      });
                    },
                  });
                },
                fix: function (e) {
                  return e[T.expando] ? e : new T.Event(e);
                },
                special: {
                  load: { noBubble: !0 },
                  click: {
                    setup: function (e) {
                      var t = this || e;
                      return (
                        de.test(t.type) &&
                          t.click &&
                          E(t, "input") &&
                          Ae(t, "click", ke),
                        !1
                      );
                    },
                    trigger: function (e) {
                      var t = this || e;
                      return (
                        de.test(t.type) &&
                          t.click &&
                          E(t, "input") &&
                          Ae(t, "click"),
                        !0
                      );
                    },
                    _default: function (e) {
                      var t = e.target;
                      return (
                        (de.test(t.type) &&
                          t.click &&
                          E(t, "input") &&
                          J.get(t, "click")) ||
                        E(t, "a")
                      );
                    },
                  },
                  beforeunload: {
                    postDispatch: function (e) {
                      void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                    },
                  },
                },
              }),
                (T.removeEvent = function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n);
                }),
                (T.Event = function (e, t) {
                  if (!(this instanceof T.Event)) return new T.Event(e, t);
                  e && e.type
                    ? ((this.originalEvent = e),
                      (this.type = e.type),
                      (this.isDefaultPrevented =
                        e.defaultPrevented ||
                        (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? ke
                          : Te),
                      (this.target =
                        e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                      (this.currentTarget = e.currentTarget),
                      (this.relatedTarget = e.relatedTarget))
                    : (this.type = e),
                    t && T.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[T.expando] = !0);
                }),
                (T.Event.prototype = {
                  constructor: T.Event,
                  isDefaultPrevented: Te,
                  isPropagationStopped: Te,
                  isImmediatePropagationStopped: Te,
                  isSimulated: !1,
                  preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = ke),
                      e && !this.isSimulated && e.preventDefault();
                  },
                  stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = ke),
                      e && !this.isSimulated && e.stopPropagation();
                  },
                  stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = ke),
                      e && !this.isSimulated && e.stopImmediatePropagation(),
                      this.stopPropagation();
                  },
                }),
                T.each(
                  {
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function (e) {
                      var t = e.button;
                      return null == e.which && xe.test(e.type)
                        ? null != e.charCode
                          ? e.charCode
                          : e.keyCode
                        : !e.which && void 0 !== t && De.test(e.type)
                        ? 1 & t
                          ? 1
                          : 2 & t
                          ? 3
                          : 4 & t
                          ? 2
                          : 0
                        : e.which;
                    },
                  },
                  T.event.addProp
                ),
                T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  T.event.special[e] = {
                    setup: function () {
                      return Ae(this, e, Se), !1;
                    },
                    trigger: function () {
                      return Ae(this, e), !0;
                    },
                    delegateType: t,
                  };
                }),
                T.each(
                  {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                  },
                  function (e, r) {
                    T.event.special[e] = {
                      delegateType: r,
                      bindType: r,
                      handle: function (e) {
                        var t,
                          n = e.relatedTarget,
                          i = e.handleObj;
                        return (
                          (n && (n === this || T.contains(this, n))) ||
                            ((e.type = i.origType),
                            (t = i.handler.apply(this, arguments)),
                            (e.type = r)),
                          t
                        );
                      },
                    };
                  }
                ),
                T.fn.extend({
                  on: function (e, t, n, i) {
                    return Ee(this, e, t, n, i);
                  },
                  one: function (e, t, n, i) {
                    return Ee(this, e, t, n, i, 1);
                  },
                  off: function (e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj)
                      return (
                        (i = e.handleObj),
                        T(e.delegateTarget).off(
                          i.namespace
                            ? i.origType + "." + i.namespace
                            : i.origType,
                          i.selector,
                          i.handler
                        ),
                        this
                      );
                    if ("object" != typeof e)
                      return (
                        (!1 !== t && "function" != typeof t) ||
                          ((n = t), (t = void 0)),
                        !1 === n && (n = Te),
                        this.each(function () {
                          T.event.remove(this, e, n, t);
                        })
                      );
                    for (r in e) this.off(r, t, e[r]);
                    return this;
                  },
                });
              var Ne =
                  /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Me = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
              function qe(e, t) {
                return (
                  (E(e, "table") &&
                    E(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                    T(e).children("tbody")[0]) ||
                  e
                );
              }
              function Le(e) {
                return (
                  (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
                );
              }
              function Fe(e) {
                return (
                  "true/" === (e.type || "").slice(0, 5)
                    ? (e.type = e.type.slice(5))
                    : e.removeAttribute("type"),
                  e
                );
              }
              function Oe(e, t) {
                var n, i, r, a, s, o, l, u;
                if (1 === t.nodeType) {
                  if (
                    J.hasData(e) &&
                    ((a = J.access(e)), (s = J.set(t, a)), (u = a.events))
                  )
                    for (r in (delete s.handle, (s.events = {}), u))
                      for (n = 0, i = u[r].length; n < i; n++)
                        T.event.add(t, r, u[r][n]);
                  G.hasData(e) &&
                    ((o = G.access(e)), (l = T.extend({}, o)), G.set(t, l));
                }
              }
              function Re(n, i, r, a) {
                i = g.apply([], i);
                var e,
                  t,
                  s,
                  o,
                  l,
                  u,
                  c = 0,
                  d = n.length,
                  h = d - 1,
                  f = i[0],
                  p = y(f);
                if (
                  p ||
                  (1 < d && "string" == typeof f && !v.checkClone && je.test(f))
                )
                  return n.each(function (e) {
                    var t = n.eq(e);
                    p && (i[0] = f.call(this, e, t.html())), Re(t, i, r, a);
                  });
                if (
                  d &&
                  ((t = (e = we(i, n[0].ownerDocument, !1, n, a)).firstChild),
                  1 === e.childNodes.length && (e = t),
                  t || a)
                ) {
                  for (o = (s = T.map(ge(e, "script"), Le)).length; c < d; c++)
                    (l = e),
                      c !== h &&
                        ((l = T.clone(l, !0, !0)),
                        o && T.merge(s, ge(l, "script"))),
                      r.call(n[c], l, c);
                  if (o)
                    for (
                      u = s[s.length - 1].ownerDocument, T.map(s, Fe), c = 0;
                      c < o;
                      c++
                    )
                      (l = s[c]),
                        fe.test(l.type || "") &&
                          !J.access(l, "globalEval") &&
                          T.contains(u, l) &&
                          (l.src && "module" !== (l.type || "").toLowerCase()
                            ? T._evalUrl &&
                              !l.noModule &&
                              T._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce"),
                              })
                            : w(l.textContent.replace(_e, ""), l, u));
                }
                return n;
              }
              function Ue(e, t, n) {
                for (
                  var i, r = t ? T.filter(t, e) : e, a = 0;
                  null != (i = r[a]);
                  a++
                )
                  n || 1 !== i.nodeType || T.cleanData(ge(i)),
                    i.parentNode &&
                      (n && re(i) && me(ge(i, "script")),
                      i.parentNode.removeChild(i));
                return e;
              }
              T.extend({
                htmlPrefilter: function (e) {
                  return e.replace(Ne, "<$1></$2>");
                },
                clone: function (e, t, n) {
                  var i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c = e.cloneNode(!0),
                    d = re(e);
                  if (
                    !(
                      v.noCloneChecked ||
                      (1 !== e.nodeType && 11 !== e.nodeType) ||
                      T.isXMLDoc(e)
                    )
                  )
                    for (s = ge(c), i = 0, r = (a = ge(e)).length; i < r; i++)
                      (o = a[i]),
                        (l = s[i]),
                        void 0,
                        "input" === (u = l.nodeName.toLowerCase()) &&
                        de.test(o.type)
                          ? (l.checked = o.checked)
                          : ("input" !== u && "textarea" !== u) ||
                            (l.defaultValue = o.defaultValue);
                  if (t)
                    if (n)
                      for (
                        a = a || ge(e), s = s || ge(c), i = 0, r = a.length;
                        i < r;
                        i++
                      )
                        Oe(a[i], s[i]);
                    else Oe(e, c);
                  return (
                    0 < (s = ge(c, "script")).length &&
                      me(s, !d && ge(e, "script")),
                    c
                  );
                },
                cleanData: function (e) {
                  for (
                    var t, n, i, r = T.event.special, a = 0;
                    void 0 !== (n = e[a]);
                    a++
                  )
                    if (Y(n)) {
                      if ((t = n[J.expando])) {
                        if (t.events)
                          for (i in t.events)
                            r[i]
                              ? T.event.remove(n, i)
                              : T.removeEvent(n, i, t.handle);
                        n[J.expando] = void 0;
                      }
                      n[G.expando] && (n[G.expando] = void 0);
                    }
                },
              }),
                T.fn.extend({
                  detach: function (e) {
                    return Ue(this, e, !0);
                  },
                  remove: function (e) {
                    return Ue(this, e);
                  },
                  text: function (e) {
                    return W(
                      this,
                      function (e) {
                        return void 0 === e
                          ? T.text(this)
                          : this.empty().each(function () {
                              (1 !== this.nodeType &&
                                11 !== this.nodeType &&
                                9 !== this.nodeType) ||
                                (this.textContent = e);
                            });
                      },
                      null,
                      e,
                      arguments.length
                    );
                  },
                  append: function () {
                    return Re(this, arguments, function (e) {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        qe(this, e).appendChild(e);
                    });
                  },
                  prepend: function () {
                    return Re(this, arguments, function (e) {
                      if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                      ) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild);
                      }
                    });
                  },
                  before: function () {
                    return Re(this, arguments, function (e) {
                      this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                  },
                  after: function () {
                    return Re(this, arguments, function (e) {
                      this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                    });
                  },
                  empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)
                      1 === e.nodeType &&
                        (T.cleanData(ge(e, !1)), (e.textContent = ""));
                    return this;
                  },
                  clone: function (e, t) {
                    return (
                      (e = null != e && e),
                      (t = null == t ? e : t),
                      this.map(function () {
                        return T.clone(this, e, t);
                      })
                    );
                  },
                  html: function (e) {
                    return W(
                      this,
                      function (e) {
                        var t = this[0] || {},
                          n = 0,
                          i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                          return t.innerHTML;
                        if (
                          "string" == typeof e &&
                          !Me.test(e) &&
                          !pe[(he.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                          e = T.htmlPrefilter(e);
                          try {
                            for (; n < i; n++)
                              1 === (t = this[n] || {}).nodeType &&
                                (T.cleanData(ge(t, !1)), (t.innerHTML = e));
                            t = 0;
                          } catch (e) {}
                        }
                        t && this.empty().append(e);
                      },
                      null,
                      e,
                      arguments.length
                    );
                  },
                  replaceWith: function () {
                    var n = [];
                    return Re(
                      this,
                      arguments,
                      function (e) {
                        var t = this.parentNode;
                        T.inArray(this, n) < 0 &&
                          (T.cleanData(ge(this)), t && t.replaceChild(e, this));
                      },
                      n
                    );
                  },
                }),
                T.each(
                  {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                  },
                  function (e, s) {
                    T.fn[e] = function (e) {
                      for (
                        var t, n = [], i = T(e), r = i.length - 1, a = 0;
                        a <= r;
                        a++
                      )
                        (t = a === r ? this : this.clone(!0)),
                          T(i[a])[s](t),
                          l.apply(n, t.get());
                      return this.pushStack(n);
                    };
                  }
                );
              var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                Ie = function (e) {
                  var t = e.ownerDocument.defaultView;
                  return (t && t.opener) || (t = C), t.getComputedStyle(e);
                },
                Pe = new RegExp(ne.join("|"), "i");
              function We(e, t, n) {
                var i,
                  r,
                  a,
                  s,
                  o = e.style;
                return (
                  (n = n || Ie(e)) &&
                    ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                      re(e) ||
                      (s = T.style(e, t)),
                    !v.pixelBoxStyles() &&
                      He.test(s) &&
                      Pe.test(t) &&
                      ((i = o.width),
                      (r = o.minWidth),
                      (a = o.maxWidth),
                      (o.minWidth = o.maxWidth = o.width = s),
                      (s = n.width),
                      (o.width = i),
                      (o.minWidth = r),
                      (o.maxWidth = a))),
                  void 0 !== s ? s + "" : s
                );
              }
              function $e(e, t) {
                return {
                  get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get;
                  },
                };
              }
              !(function () {
                function e() {
                  if (l) {
                    (o.style.cssText =
                      "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                      (l.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                      ie.appendChild(o).appendChild(l);
                    var e = C.getComputedStyle(l);
                    (n = "1%" !== e.top),
                      (s = 12 === t(e.marginLeft)),
                      (l.style.right = "60%"),
                      (a = 36 === t(e.right)),
                      (i = 36 === t(e.width)),
                      (l.style.position = "absolute"),
                      (r = 12 === t(l.offsetWidth / 3)),
                      ie.removeChild(o),
                      (l = null);
                  }
                }
                function t(e) {
                  return Math.round(parseFloat(e));
                }
                var n,
                  i,
                  r,
                  a,
                  s,
                  o = k.createElement("div"),
                  l = k.createElement("div");
                l.style &&
                  ((l.style.backgroundClip = "content-box"),
                  (l.cloneNode(!0).style.backgroundClip = ""),
                  (v.clearCloneStyle =
                    "content-box" === l.style.backgroundClip),
                  T.extend(v, {
                    boxSizingReliable: function () {
                      return e(), i;
                    },
                    pixelBoxStyles: function () {
                      return e(), a;
                    },
                    pixelPosition: function () {
                      return e(), n;
                    },
                    reliableMarginLeft: function () {
                      return e(), s;
                    },
                    scrollboxSize: function () {
                      return e(), r;
                    },
                  }));
              })();
              var Ve = ["Webkit", "Moz", "ms"],
                ze = k.createElement("div").style,
                Be = {};
              function Ye(e) {
                var t = T.cssProps[e] || Be[e];
                return (
                  t ||
                  (e in ze
                    ? e
                    : (Be[e] =
                        (function (e) {
                          for (
                            var t = e[0].toUpperCase() + e.slice(1),
                              n = Ve.length;
                            n--;

                          )
                            if ((e = Ve[n] + t) in ze) return e;
                        })(e) || e))
                );
              }
              var Xe = /^(none|table(?!-c[ea]).+)/,
                Je = /^--/,
                Ge = {
                  position: "absolute",
                  visibility: "hidden",
                  display: "block",
                },
                Ze = { letterSpacing: "0", fontWeight: "400" };
              function Qe(e, t, n) {
                var i = te.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
              }
              function Ke(e, t, n, i, r, a) {
                var s = "width" === t ? 1 : 0,
                  o = 0,
                  l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2)
                  "margin" === n && (l += T.css(e, n + ne[s], !0, r)),
                    i
                      ? ("content" === n &&
                          (l -= T.css(e, "padding" + ne[s], !0, r)),
                        "margin" !== n &&
                          (l -= T.css(e, "border" + ne[s] + "Width", !0, r)))
                      : ((l += T.css(e, "padding" + ne[s], !0, r)),
                        "padding" !== n
                          ? (l += T.css(e, "border" + ne[s] + "Width", !0, r))
                          : (o += T.css(e, "border" + ne[s] + "Width", !0, r)));
                return (
                  !i &&
                    0 <= a &&
                    (l +=
                      Math.max(
                        0,
                        Math.ceil(
                          e["offset" + t[0].toUpperCase() + t.slice(1)] -
                            a -
                            l -
                            o -
                            0.5
                        )
                      ) || 0),
                  l
                );
              }
              function et(e, t, n) {
                var i = Ie(e),
                  r =
                    (!v.boxSizingReliable() || n) &&
                    "border-box" === T.css(e, "boxSizing", !1, i),
                  a = r,
                  s = We(e, t, i),
                  o = "offset" + t[0].toUpperCase() + t.slice(1);
                if (He.test(s)) {
                  if (!n) return s;
                  s = "auto";
                }
                return (
                  ((!v.boxSizingReliable() && r) ||
                    "auto" === s ||
                    (!parseFloat(s) &&
                      "inline" === T.css(e, "display", !1, i))) &&
                    e.getClientRects().length &&
                    ((r = "border-box" === T.css(e, "boxSizing", !1, i)),
                    (a = o in e) && (s = e[o])),
                  (s = parseFloat(s) || 0) +
                    Ke(e, t, n || (r ? "border" : "content"), a, i, s) +
                    "px"
                );
              }
              function tt(e, t, n, i, r) {
                return new tt.prototype.init(e, t, n, i, r);
              }
              T.extend({
                cssHooks: {
                  opacity: {
                    get: function (e, t) {
                      if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n;
                      }
                    },
                  },
                },
                cssNumber: {
                  animationIterationCount: !0,
                  columnCount: !0,
                  fillOpacity: !0,
                  flexGrow: !0,
                  flexShrink: !0,
                  fontWeight: !0,
                  gridArea: !0,
                  gridColumn: !0,
                  gridColumnEnd: !0,
                  gridColumnStart: !0,
                  gridRow: !0,
                  gridRowEnd: !0,
                  gridRowStart: !0,
                  lineHeight: !0,
                  opacity: !0,
                  order: !0,
                  orphans: !0,
                  widows: !0,
                  zIndex: !0,
                  zoom: !0,
                },
                cssProps: {},
                style: function (e, t, n, i) {
                  if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r,
                      a,
                      s,
                      o = B(t),
                      l = Je.test(t),
                      u = e.style;
                    if (
                      (l || (t = Ye(o)),
                      (s = T.cssHooks[t] || T.cssHooks[o]),
                      void 0 === n)
                    )
                      return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                        ? r
                        : u[t];
                    "string" === (a = typeof n) &&
                      (r = te.exec(n)) &&
                      r[1] &&
                      ((n = le(e, t, r)), (a = "number")),
                      null != n &&
                        n == n &&
                        ("number" !== a ||
                          l ||
                          (n += (r && r[3]) || (T.cssNumber[o] ? "" : "px")),
                        v.clearCloneStyle ||
                          "" !== n ||
                          0 !== t.indexOf("background") ||
                          (u[t] = "inherit"),
                        (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                          (l ? u.setProperty(t, n) : (u[t] = n)));
                  }
                },
                css: function (e, t, n, i) {
                  var r,
                    a,
                    s,
                    o = B(t);
                  return (
                    Je.test(t) || (t = Ye(o)),
                    (s = T.cssHooks[t] || T.cssHooks[o]) &&
                      "get" in s &&
                      (r = s.get(e, !0, n)),
                    void 0 === r && (r = We(e, t, i)),
                    "normal" === r && t in Ze && (r = Ze[t]),
                    "" === n || n
                      ? ((a = parseFloat(r)),
                        !0 === n || isFinite(a) ? a || 0 : r)
                      : r
                  );
                },
              }),
                T.each(["height", "width"], function (e, l) {
                  T.cssHooks[l] = {
                    get: function (e, t, n) {
                      if (t)
                        return !Xe.test(T.css(e, "display")) ||
                          (e.getClientRects().length &&
                            e.getBoundingClientRect().width)
                          ? et(e, l, n)
                          : oe(e, Ge, function () {
                              return et(e, l, n);
                            });
                    },
                    set: function (e, t, n) {
                      var i,
                        r = Ie(e),
                        a = !v.scrollboxSize() && "absolute" === r.position,
                        s =
                          (a || n) &&
                          "border-box" === T.css(e, "boxSizing", !1, r),
                        o = n ? Ke(e, l, n, s, r) : 0;
                      return (
                        s &&
                          a &&
                          (o -= Math.ceil(
                            e["offset" + l[0].toUpperCase() + l.slice(1)] -
                              parseFloat(r[l]) -
                              Ke(e, l, "border", !1, r) -
                              0.5
                          )),
                        o &&
                          (i = te.exec(t)) &&
                          "px" !== (i[3] || "px") &&
                          ((e.style[l] = t), (t = T.css(e, l))),
                        Qe(0, t, o)
                      );
                    },
                  };
                }),
                (T.cssHooks.marginLeft = $e(
                  v.reliableMarginLeft,
                  function (e, t) {
                    if (t)
                      return (
                        (parseFloat(We(e, "marginLeft")) ||
                          e.getBoundingClientRect().left -
                            oe(e, { marginLeft: 0 }, function () {
                              return e.getBoundingClientRect().left;
                            })) + "px"
                      );
                  }
                )),
                T.each(
                  { margin: "", padding: "", border: "Width" },
                  function (r, a) {
                    (T.cssHooks[r + a] = {
                      expand: function (e) {
                        for (
                          var t = 0,
                            n = {},
                            i = "string" == typeof e ? e.split(" ") : [e];
                          t < 4;
                          t++
                        )
                          n[r + ne[t] + a] = i[t] || i[t - 2] || i[0];
                        return n;
                      },
                    }),
                      "margin" !== r && (T.cssHooks[r + a].set = Qe);
                  }
                ),
                T.fn.extend({
                  css: function (e, t) {
                    return W(
                      this,
                      function (e, t, n) {
                        var i,
                          r,
                          a = {},
                          s = 0;
                        if (Array.isArray(t)) {
                          for (i = Ie(e), r = t.length; s < r; s++)
                            a[t[s]] = T.css(e, t[s], !1, i);
                          return a;
                        }
                        return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                      },
                      e,
                      t,
                      1 < arguments.length
                    );
                  },
                }),
                (((T.Tween = tt).prototype = {
                  constructor: tt,
                  init: function (e, t, n, i, r, a) {
                    (this.elem = e),
                      (this.prop = n),
                      (this.easing = r || T.easing._default),
                      (this.options = t),
                      (this.start = this.now = this.cur()),
                      (this.end = i),
                      (this.unit = a || (T.cssNumber[n] ? "" : "px"));
                  },
                  cur: function () {
                    var e = tt.propHooks[this.prop];
                    return e && e.get
                      ? e.get(this)
                      : tt.propHooks._default.get(this);
                  },
                  run: function (e) {
                    var t,
                      n = tt.propHooks[this.prop];
                    return (
                      this.options.duration
                        ? (this.pos = t =
                            T.easing[this.easing](
                              e,
                              this.options.duration * e,
                              0,
                              1,
                              this.options.duration
                            ))
                        : (this.pos = t = e),
                      (this.now = (this.end - this.start) * t + this.start),
                      this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                      n && n.set
                        ? n.set(this)
                        : tt.propHooks._default.set(this),
                      this
                    );
                  },
                }).init.prototype = tt.prototype),
                ((tt.propHooks = {
                  _default: {
                    get: function (e) {
                      var t;
                      return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0;
                    },
                    set: function (e) {
                      T.fx.step[e.prop]
                        ? T.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!T.cssHooks[e.prop] &&
                            null == e.elem.style[Ye(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : T.style(e.elem, e.prop, e.now + e.unit);
                    },
                  },
                }).scrollTop = tt.propHooks.scrollLeft =
                  {
                    set: function (e) {
                      e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                    },
                  }),
                (T.easing = {
                  linear: function (e) {
                    return e;
                  },
                  swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                  },
                  _default: "swing",
                }),
                (T.fx = tt.prototype.init),
                (T.fx.step = {});
              var nt,
                it,
                rt,
                at,
                st = /^(?:toggle|show|hide)$/,
                ot = /queueHooks$/;
              function lt() {
                it &&
                  (!1 === k.hidden && C.requestAnimationFrame
                    ? C.requestAnimationFrame(lt)
                    : C.setTimeout(lt, T.fx.interval),
                  T.fx.tick());
              }
              function ut() {
                return (
                  C.setTimeout(function () {
                    nt = void 0;
                  }),
                  (nt = Date.now())
                );
              }
              function ct(e, t) {
                var n,
                  i = 0,
                  r = { height: e };
                for (t = t ? 1 : 0; i < 4; i += 2 - t)
                  r["margin" + (n = ne[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r;
              }
              function dt(e, t, n) {
                for (
                  var i,
                    r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                    a = 0,
                    s = r.length;
                  a < s;
                  a++
                )
                  if ((i = r[a].call(n, t, e))) return i;
              }
              function ht(a, e, t) {
                var n,
                  s,
                  i = 0,
                  r = ht.prefilters.length,
                  o = T.Deferred().always(function () {
                    delete l.elem;
                  }),
                  l = function () {
                    if (s) return !1;
                    for (
                      var e = nt || ut(),
                        t = Math.max(0, u.startTime + u.duration - e),
                        n = 1 - (t / u.duration || 0),
                        i = 0,
                        r = u.tweens.length;
                      i < r;
                      i++
                    )
                      u.tweens[i].run(n);
                    return (
                      o.notifyWith(a, [u, n, t]),
                      n < 1 && r
                        ? t
                        : (r || o.notifyWith(a, [u, 1, 0]),
                          o.resolveWith(a, [u]),
                          !1)
                    );
                  },
                  u = o.promise({
                    elem: a,
                    props: T.extend({}, e),
                    opts: T.extend(
                      !0,
                      { specialEasing: {}, easing: T.easing._default },
                      t
                    ),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: nt || ut(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function (e, t) {
                      var n = T.Tween(
                        a,
                        u.opts,
                        e,
                        t,
                        u.opts.specialEasing[e] || u.opts.easing
                      );
                      return u.tweens.push(n), n;
                    },
                    stop: function (e) {
                      var t = 0,
                        n = e ? u.tweens.length : 0;
                      if (s) return this;
                      for (s = !0; t < n; t++) u.tweens[t].run(1);
                      return (
                        e
                          ? (o.notifyWith(a, [u, 1, 0]),
                            o.resolveWith(a, [u, e]))
                          : o.rejectWith(a, [u, e]),
                        this
                      );
                    },
                  }),
                  c = u.props;
                for (
                  !(function (e, t) {
                    var n, i, r, a, s;
                    for (n in e)
                      if (
                        ((r = t[(i = B(n))]),
                        (a = e[n]),
                        Array.isArray(a) && ((r = a[1]), (a = e[n] = a[0])),
                        n !== i && ((e[i] = a), delete e[n]),
                        (s = T.cssHooks[i]) && ("expand" in s))
                      )
                        for (n in ((a = s.expand(a)), delete e[i], a))
                          (n in e) || ((e[n] = a[n]), (t[n] = r));
                      else t[i] = r;
                  })(c, u.opts.specialEasing);
                  i < r;
                  i++
                )
                  if ((n = ht.prefilters[i].call(u, a, c, u.opts)))
                    return (
                      y(n.stop) &&
                        (T._queueHooks(u.elem, u.opts.queue).stop =
                          n.stop.bind(n)),
                      n
                    );
                return (
                  T.map(c, dt, u),
                  y(u.opts.start) && u.opts.start.call(a, u),
                  u
                    .progress(u.opts.progress)
                    .done(u.opts.done, u.opts.complete)
                    .fail(u.opts.fail)
                    .always(u.opts.always),
                  T.fx.timer(
                    T.extend(l, { elem: a, anim: u, queue: u.opts.queue })
                  ),
                  u
                );
              }
              (T.Animation = T.extend(ht, {
                tweeners: {
                  "*": [
                    function (e, t) {
                      var n = this.createTween(e, t);
                      return le(n.elem, e, te.exec(t), n), n;
                    },
                  ],
                },
                tweener: function (e, t) {
                  for (
                    var n,
                      i = 0,
                      r = (e = y(e) ? ((t = e), ["*"]) : e.match(F)).length;
                    i < r;
                    i++
                  )
                    (n = e[i]),
                      (ht.tweeners[n] = ht.tweeners[n] || []),
                      ht.tweeners[n].unshift(t);
                },
                prefilters: [
                  function (e, t, n) {
                    var i,
                      r,
                      a,
                      s,
                      o,
                      l,
                      u,
                      c,
                      d = "width" in t || "height" in t,
                      h = this,
                      f = {},
                      p = e.style,
                      g = e.nodeType && se(e),
                      m = J.get(e, "fxshow");
                    for (i in (n.queue ||
                      (null == (s = T._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (o = s.empty.fire),
                        (s.empty.fire = function () {
                          s.unqueued || o();
                        })),
                      s.unqueued++,
                      h.always(function () {
                        h.always(function () {
                          s.unqueued--,
                            T.queue(e, "fx").length || s.empty.fire();
                        });
                      })),
                    t))
                      if (((r = t[i]), st.test(r))) {
                        if (
                          (delete t[i],
                          (a = a || "toggle" === r),
                          r === (g ? "hide" : "show"))
                        ) {
                          if ("show" !== r || !m || void 0 === m[i]) continue;
                          g = !0;
                        }
                        f[i] = (m && m[i]) || T.style(e, i);
                      }
                    if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                      for (i in (d &&
                        1 === e.nodeType &&
                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        null == (u = m && m.display) &&
                          (u = J.get(e, "display")),
                        "none" === (c = T.css(e, "display")) &&
                          (u
                            ? (c = u)
                            : (ce([e], !0),
                              (u = e.style.display || u),
                              (c = T.css(e, "display")),
                              ce([e]))),
                        ("inline" === c ||
                          ("inline-block" === c && null != u)) &&
                          "none" === T.css(e, "float") &&
                          (l ||
                            (h.done(function () {
                              p.display = u;
                            }),
                            null == u &&
                              ((c = p.display), (u = "none" === c ? "" : c))),
                          (p.display = "inline-block"))),
                      n.overflow &&
                        ((p.overflow = "hidden"),
                        h.always(function () {
                          (p.overflow = n.overflow[0]),
                            (p.overflowX = n.overflow[1]),
                            (p.overflowY = n.overflow[2]);
                        })),
                      (l = !1),
                      f))
                        l ||
                          (m
                            ? "hidden" in m && (g = m.hidden)
                            : (m = J.access(e, "fxshow", { display: u })),
                          a && (m.hidden = !g),
                          g && ce([e], !0),
                          h.done(function () {
                            for (i in (g || ce([e]), J.remove(e, "fxshow"), f))
                              T.style(e, i, f[i]);
                          })),
                          (l = dt(g ? m[i] : 0, i, h)),
                          i in m ||
                            ((m[i] = l.start),
                            g && ((l.end = l.start), (l.start = 0)));
                  },
                ],
                prefilter: function (e, t) {
                  t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
                },
              })),
                (T.speed = function (e, t, n) {
                  var i =
                    e && "object" == typeof e
                      ? T.extend({}, e)
                      : {
                          complete: n || (!n && t) || (y(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !y(t) && t),
                        };
                  return (
                    T.fx.off
                      ? (i.duration = 0)
                      : "number" != typeof i.duration &&
                        (i.duration in T.fx.speeds
                          ? (i.duration = T.fx.speeds[i.duration])
                          : (i.duration = T.fx.speeds._default)),
                    (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                    (i.old = i.complete),
                    (i.complete = function () {
                      y(i.old) && i.old.call(this),
                        i.queue && T.dequeue(this, i.queue);
                    }),
                    i
                  );
                }),
                T.fn.extend({
                  fadeTo: function (e, t, n, i) {
                    return this.filter(se)
                      .css("opacity", 0)
                      .show()
                      .end()
                      .animate({ opacity: t }, e, n, i);
                  },
                  animate: function (t, e, n, i) {
                    var r = T.isEmptyObject(t),
                      a = T.speed(e, n, i),
                      s = function () {
                        var e = ht(this, T.extend({}, t), a);
                        (r || J.get(this, "finish")) && e.stop(!0);
                      };
                    return (
                      (s.finish = s),
                      r || !1 === a.queue
                        ? this.each(s)
                        : this.queue(a.queue, s)
                    );
                  },
                  stop: function (r, e, a) {
                    var s = function (e) {
                      var t = e.stop;
                      delete e.stop, t(a);
                    };
                    return (
                      "string" != typeof r && ((a = e), (e = r), (r = void 0)),
                      e && !1 !== r && this.queue(r || "fx", []),
                      this.each(function () {
                        var e = !0,
                          t = null != r && r + "queueHooks",
                          n = T.timers,
                          i = J.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                          for (t in i)
                            i[t] && i[t].stop && ot.test(t) && s(i[t]);
                        for (t = n.length; t--; )
                          n[t].elem !== this ||
                            (null != r && n[t].queue !== r) ||
                            (n[t].anim.stop(a), (e = !1), n.splice(t, 1));
                        (!e && a) || T.dequeue(this, r);
                      })
                    );
                  },
                  finish: function (s) {
                    return (
                      !1 !== s && (s = s || "fx"),
                      this.each(function () {
                        var e,
                          t = J.get(this),
                          n = t[s + "queue"],
                          i = t[s + "queueHooks"],
                          r = T.timers,
                          a = n ? n.length : 0;
                        for (
                          t.finish = !0,
                            T.queue(this, s, []),
                            i && i.stop && i.stop.call(this, !0),
                            e = r.length;
                          e--;

                        )
                          r[e].elem === this &&
                            r[e].queue === s &&
                            (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < a; e++)
                          n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                      })
                    );
                  },
                }),
                T.each(["toggle", "show", "hide"], function (e, i) {
                  var r = T.fn[i];
                  T.fn[i] = function (e, t, n) {
                    return null == e || "boolean" == typeof e
                      ? r.apply(this, arguments)
                      : this.animate(ct(i, !0), e, t, n);
                  };
                }),
                T.each(
                  {
                    slideDown: ct("show"),
                    slideUp: ct("hide"),
                    slideToggle: ct("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" },
                  },
                  function (e, i) {
                    T.fn[e] = function (e, t, n) {
                      return this.animate(i, e, t, n);
                    };
                  }
                ),
                (T.timers = []),
                (T.fx.tick = function () {
                  var e,
                    t = 0,
                    n = T.timers;
                  for (nt = Date.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                  n.length || T.fx.stop(), (nt = void 0);
                }),
                (T.fx.timer = function (e) {
                  T.timers.push(e), T.fx.start();
                }),
                (T.fx.interval = 13),
                (T.fx.start = function () {
                  it || ((it = !0), lt());
                }),
                (T.fx.stop = function () {
                  it = null;
                }),
                (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (T.fn.delay = function (i, e) {
                  return (
                    (i = (T.fx && T.fx.speeds[i]) || i),
                    (e = e || "fx"),
                    this.queue(e, function (e, t) {
                      var n = C.setTimeout(e, i);
                      t.stop = function () {
                        C.clearTimeout(n);
                      };
                    })
                  );
                }),
                (rt = k.createElement("input")),
                (at = k
                  .createElement("select")
                  .appendChild(k.createElement("option"))),
                (rt.type = "checkbox"),
                (v.checkOn = "" !== rt.value),
                (v.optSelected = at.selected),
                ((rt = k.createElement("input")).value = "t"),
                (rt.type = "radio"),
                (v.radioValue = "t" === rt.value);
              var ft,
                pt = T.expr.attrHandle;
              T.fn.extend({
                attr: function (e, t) {
                  return W(this, T.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                  return this.each(function () {
                    T.removeAttr(this, e);
                  });
                },
              }),
                T.extend({
                  attr: function (e, t, n) {
                    var i,
                      r,
                      a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a)
                      return void 0 === e.getAttribute
                        ? T.prop(e, t, n)
                        : ((1 === a && T.isXMLDoc(e)) ||
                            (r =
                              T.attrHooks[t.toLowerCase()] ||
                              (T.expr.match.bool.test(t) ? ft : void 0)),
                          void 0 !== n
                            ? null === n
                              ? void T.removeAttr(e, t)
                              : r &&
                                "set" in r &&
                                void 0 !== (i = r.set(e, n, t))
                              ? i
                              : (e.setAttribute(t, n + ""), n)
                            : r && "get" in r && null !== (i = r.get(e, t))
                            ? i
                            : null == (i = T.find.attr(e, t))
                            ? void 0
                            : i);
                  },
                  attrHooks: {
                    type: {
                      set: function (e, t) {
                        if (!v.radioValue && "radio" === t && E(e, "input")) {
                          var n = e.value;
                          return (
                            e.setAttribute("type", t), n && (e.value = n), t
                          );
                        }
                      },
                    },
                  },
                  removeAttr: function (e, t) {
                    var n,
                      i = 0,
                      r = t && t.match(F);
                    if (r && 1 === e.nodeType)
                      for (; (n = r[i++]); ) e.removeAttribute(n);
                  },
                }),
                (ft = {
                  set: function (e, t, n) {
                    return (
                      !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
                    );
                  },
                }),
                T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
                  var s = pt[t] || T.find.attr;
                  pt[t] = function (e, t, n) {
                    var i,
                      r,
                      a = t.toLowerCase();
                    return (
                      n ||
                        ((r = pt[a]),
                        (pt[a] = i),
                        (i = null != s(e, t, n) ? a : null),
                        (pt[a] = r)),
                      i
                    );
                  };
                });
              var gt = /^(?:input|select|textarea|button)$/i,
                mt = /^(?:a|area)$/i;
              function vt(e) {
                return (e.match(F) || []).join(" ");
              }
              function yt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
              }
              function bt(e) {
                return Array.isArray(e)
                  ? e
                  : ("string" == typeof e && e.match(F)) || [];
              }
              T.fn.extend({
                prop: function (e, t) {
                  return W(this, T.prop, e, t, 1 < arguments.length);
                },
                removeProp: function (e) {
                  return this.each(function () {
                    delete this[T.propFix[e] || e];
                  });
                },
              }),
                T.extend({
                  prop: function (e, t, n) {
                    var i,
                      r,
                      a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a)
                      return (
                        (1 === a && T.isXMLDoc(e)) ||
                          ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                        void 0 !== n
                          ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                            ? i
                            : (e[t] = n)
                          : r && "get" in r && null !== (i = r.get(e, t))
                          ? i
                          : e[t]
                      );
                  },
                  propHooks: {
                    tabIndex: {
                      get: function (e) {
                        var t = T.find.attr(e, "tabindex");
                        return t
                          ? parseInt(t, 10)
                          : gt.test(e.nodeName) ||
                            (mt.test(e.nodeName) && e.href)
                          ? 0
                          : -1;
                      },
                    },
                  },
                  propFix: { for: "htmlFor", class: "className" },
                }),
                v.optSelected ||
                  (T.propHooks.selected = {
                    get: function (e) {
                      var t = e.parentNode;
                      return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                      );
                    },
                    set: function (e) {
                      var t = e.parentNode;
                      t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                    },
                  }),
                T.each(
                  [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                  ],
                  function () {
                    T.propFix[this.toLowerCase()] = this;
                  }
                ),
                T.fn.extend({
                  addClass: function (t) {
                    var e,
                      n,
                      i,
                      r,
                      a,
                      s,
                      o,
                      l = 0;
                    if (y(t))
                      return this.each(function (e) {
                        T(this).addClass(t.call(this, e, yt(this)));
                      });
                    if ((e = bt(t)).length)
                      for (; (n = this[l++]); )
                        if (
                          ((r = yt(n)),
                          (i = 1 === n.nodeType && " " + vt(r) + " "))
                        ) {
                          for (s = 0; (a = e[s++]); )
                            i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                          r !== (o = vt(i)) && n.setAttribute("class", o);
                        }
                    return this;
                  },
                  removeClass: function (t) {
                    var e,
                      n,
                      i,
                      r,
                      a,
                      s,
                      o,
                      l = 0;
                    if (y(t))
                      return this.each(function (e) {
                        T(this).removeClass(t.call(this, e, yt(this)));
                      });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = bt(t)).length)
                      for (; (n = this[l++]); )
                        if (
                          ((r = yt(n)),
                          (i = 1 === n.nodeType && " " + vt(r) + " "))
                        ) {
                          for (s = 0; (a = e[s++]); )
                            for (; -1 < i.indexOf(" " + a + " "); )
                              i = i.replace(" " + a + " ", " ");
                          r !== (o = vt(i)) && n.setAttribute("class", o);
                        }
                    return this;
                  },
                  toggleClass: function (r, t) {
                    var a = typeof r,
                      s = "string" === a || Array.isArray(r);
                    return "boolean" == typeof t && s
                      ? t
                        ? this.addClass(r)
                        : this.removeClass(r)
                      : y(r)
                      ? this.each(function (e) {
                          T(this).toggleClass(r.call(this, e, yt(this), t), t);
                        })
                      : this.each(function () {
                          var e, t, n, i;
                          if (s)
                            for (t = 0, n = T(this), i = bt(r); (e = i[t++]); )
                              n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          else
                            (void 0 !== r && "boolean" !== a) ||
                              ((e = yt(this)) &&
                                J.set(this, "__className__", e),
                              this.setAttribute &&
                                this.setAttribute(
                                  "class",
                                  e || !1 === r
                                    ? ""
                                    : J.get(this, "__className__") || ""
                                ));
                        });
                  },
                  hasClass: function (e) {
                    var t,
                      n,
                      i = 0;
                    for (t = " " + e + " "; (n = this[i++]); )
                      if (
                        1 === n.nodeType &&
                        -1 < (" " + vt(yt(n)) + " ").indexOf(t)
                      )
                        return !0;
                    return !1;
                  },
                });
              var wt = /\r/g;
              T.fn.extend({
                val: function (n) {
                  var i,
                    e,
                    r,
                    t = this[0];
                  return arguments.length
                    ? ((r = y(n)),
                      this.each(function (e) {
                        var t;
                        1 === this.nodeType &&
                          (null == (t = r ? n.call(this, e, T(this).val()) : n)
                            ? (t = "")
                            : "number" == typeof t
                            ? (t += "")
                            : Array.isArray(t) &&
                              (t = T.map(t, function (e) {
                                return null == e ? "" : e + "";
                              })),
                          ((i =
                            T.valHooks[this.type] ||
                            T.valHooks[this.nodeName.toLowerCase()]) &&
                            "set" in i &&
                            void 0 !== i.set(this, t, "value")) ||
                            (this.value = t));
                      }))
                    : t
                    ? (i =
                        T.valHooks[t.type] ||
                        T.valHooks[t.nodeName.toLowerCase()]) &&
                      "get" in i &&
                      void 0 !== (e = i.get(t, "value"))
                      ? e
                      : "string" == typeof (e = t.value)
                      ? e.replace(wt, "")
                      : null == e
                      ? ""
                      : e
                    : void 0;
                },
              }),
                T.extend({
                  valHooks: {
                    option: {
                      get: function (e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : vt(T.text(e));
                      },
                    },
                    select: {
                      get: function (e) {
                        var t,
                          n,
                          i,
                          r = e.options,
                          a = e.selectedIndex,
                          s = "select-one" === e.type,
                          o = s ? null : [],
                          l = s ? a + 1 : r.length;
                        for (i = a < 0 ? l : s ? a : 0; i < l; i++)
                          if (
                            ((n = r[i]).selected || i === a) &&
                            !n.disabled &&
                            (!n.parentNode.disabled ||
                              !E(n.parentNode, "optgroup"))
                          ) {
                            if (((t = T(n).val()), s)) return t;
                            o.push(t);
                          }
                        return o;
                      },
                      set: function (e, t) {
                        for (
                          var n,
                            i,
                            r = e.options,
                            a = T.makeArray(t),
                            s = r.length;
                          s--;

                        )
                          ((i = r[s]).selected =
                            -1 < T.inArray(T.valHooks.option.get(i), a)) &&
                            (n = !0);
                        return n || (e.selectedIndex = -1), a;
                      },
                    },
                  },
                }),
                T.each(["radio", "checkbox"], function () {
                  (T.valHooks[this] = {
                    set: function (e, t) {
                      if (Array.isArray(t))
                        return (e.checked = -1 < T.inArray(T(e).val(), t));
                    },
                  }),
                    v.checkOn ||
                      (T.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                          ? "on"
                          : e.value;
                      });
                }),
                (v.focusin = "onfocusin" in C);
              var xt = /^(?:focusinfocus|focusoutblur)$/,
                Dt = function (e) {
                  e.stopPropagation();
                };
              T.extend(T.event, {
                trigger: function (e, t, n, i) {
                  var r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    h = [n || k],
                    f = m.call(e, "type") ? e.type : e,
                    p = m.call(e, "namespace") ? e.namespace.split(".") : [];
                  if (
                    ((a = d = s = n = n || k),
                    3 !== n.nodeType &&
                      8 !== n.nodeType &&
                      !xt.test(f + T.event.triggered) &&
                      (-1 < f.indexOf(".") &&
                        ((f = (p = f.split(".")).shift()), p.sort()),
                      (l = f.indexOf(":") < 0 && "on" + f),
                      ((e = e[T.expando]
                        ? e
                        : new T.Event(f, "object" == typeof e && e)).isTrigger =
                        i ? 2 : 3),
                      (e.namespace = p.join(".")),
                      (e.rnamespace = e.namespace
                        ? new RegExp(
                            "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                      (e.result = void 0),
                      e.target || (e.target = n),
                      (t = null == t ? [e] : T.makeArray(t, [e])),
                      (c = T.event.special[f] || {}),
                      i || !c.trigger || !1 !== c.trigger.apply(n, t)))
                  ) {
                    if (!i && !c.noBubble && !b(n)) {
                      for (
                        o = c.delegateType || f,
                          xt.test(o + f) || (a = a.parentNode);
                        a;
                        a = a.parentNode
                      )
                        h.push(a), (s = a);
                      s === (n.ownerDocument || k) &&
                        h.push(s.defaultView || s.parentWindow || C);
                    }
                    for (r = 0; (a = h[r++]) && !e.isPropagationStopped(); )
                      (d = a),
                        (e.type = 1 < r ? o : c.bindType || f),
                        (u =
                          (J.get(a, "events") || {})[e.type] &&
                          J.get(a, "handle")) && u.apply(a, t),
                        (u = l && a[l]) &&
                          u.apply &&
                          Y(a) &&
                          ((e.result = u.apply(a, t)),
                          !1 === e.result && e.preventDefault());
                    return (
                      (e.type = f),
                      i ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(h.pop(), t)) ||
                        !Y(n) ||
                        (l &&
                          y(n[f]) &&
                          !b(n) &&
                          ((s = n[l]) && (n[l] = null),
                          (T.event.triggered = f),
                          e.isPropagationStopped() && d.addEventListener(f, Dt),
                          n[f](),
                          e.isPropagationStopped() &&
                            d.removeEventListener(f, Dt),
                          (T.event.triggered = void 0),
                          s && (n[l] = s))),
                      e.result
                    );
                  }
                },
                simulate: function (e, t, n) {
                  var i = T.extend(new T.Event(), n, {
                    type: e,
                    isSimulated: !0,
                  });
                  T.event.trigger(i, null, t);
                },
              }),
                T.fn.extend({
                  trigger: function (e, t) {
                    return this.each(function () {
                      T.event.trigger(e, t, this);
                    });
                  },
                  triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return T.event.trigger(e, t, n, !0);
                  },
                }),
                v.focusin ||
                  T.each(
                    { focus: "focusin", blur: "focusout" },
                    function (n, i) {
                      var r = function (e) {
                        T.event.simulate(i, e.target, T.event.fix(e));
                      };
                      T.event.special[i] = {
                        setup: function () {
                          var e = this.ownerDocument || this,
                            t = J.access(e, i);
                          t || e.addEventListener(n, r, !0),
                            J.access(e, i, (t || 0) + 1);
                        },
                        teardown: function () {
                          var e = this.ownerDocument || this,
                            t = J.access(e, i) - 1;
                          t
                            ? J.access(e, i, t)
                            : (e.removeEventListener(n, r, !0), J.remove(e, i));
                        },
                      };
                    }
                  );
              var Ct = C.location,
                kt = Date.now(),
                Tt = /\?/;
              T.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                  t = new C.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                  t = void 0;
                }
                return (
                  (t && !t.getElementsByTagName("parsererror").length) ||
                    T.error("Invalid XML: " + e),
                  t
                );
              };
              var St = /\[\]$/,
                Et = /\r?\n/g,
                At = /^(?:submit|button|image|reset|file)$/i,
                Nt = /^(?:input|select|textarea|keygen)/i;
              function Mt(n, e, i, r) {
                var t;
                if (Array.isArray(e))
                  T.each(e, function (e, t) {
                    i || St.test(n)
                      ? r(n, t)
                      : Mt(
                          n +
                            "[" +
                            ("object" == typeof t && null != t ? e : "") +
                            "]",
                          t,
                          i,
                          r
                        );
                  });
                else if (i || "object" !== x(e)) r(n, e);
                else for (t in e) Mt(n + "[" + t + "]", e[t], i, r);
              }
              (T.param = function (e, t) {
                var n,
                  i = [],
                  r = function (e, t) {
                    var n = y(t) ? t() : t;
                    i[i.length] =
                      encodeURIComponent(e) +
                      "=" +
                      encodeURIComponent(null == n ? "" : n);
                  };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
                  T.each(e, function () {
                    r(this.name, this.value);
                  });
                else for (n in e) Mt(n, e[n], t, r);
                return i.join("&");
              }),
                T.fn.extend({
                  serialize: function () {
                    return T.param(this.serializeArray());
                  },
                  serializeArray: function () {
                    return this.map(function () {
                      var e = T.prop(this, "elements");
                      return e ? T.makeArray(e) : this;
                    })
                      .filter(function () {
                        var e = this.type;
                        return (
                          this.name &&
                          !T(this).is(":disabled") &&
                          Nt.test(this.nodeName) &&
                          !At.test(e) &&
                          (this.checked || !de.test(e))
                        );
                      })
                      .map(function (e, t) {
                        var n = T(this).val();
                        return null == n
                          ? null
                          : Array.isArray(n)
                          ? T.map(n, function (e) {
                              return {
                                name: t.name,
                                value: e.replace(Et, "\r\n"),
                              };
                            })
                          : { name: t.name, value: n.replace(Et, "\r\n") };
                      })
                      .get();
                  },
                });
              var jt = /%20/g,
                _t = /#.*$/,
                qt = /([?&])_=[^&]*/,
                Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ft = /^(?:GET|HEAD)$/,
                Ot = /^\/\//,
                Rt = {},
                Ut = {},
                Ht = "*/".concat("*"),
                It = k.createElement("a");
              function Pt(a) {
                return function (e, t) {
                  "string" != typeof e && ((t = e), (e = "*"));
                  var n,
                    i = 0,
                    r = e.toLowerCase().match(F) || [];
                  if (y(t))
                    for (; (n = r[i++]); )
                      "+" === n[0]
                        ? ((n = n.slice(1) || "*"),
                          (a[n] = a[n] || []).unshift(t))
                        : (a[n] = a[n] || []).push(t);
                };
              }
              function Wt(t, r, a, s) {
                var o = {},
                  l = t === Ut;
                function u(e) {
                  var i;
                  return (
                    (o[e] = !0),
                    T.each(t[e] || [], function (e, t) {
                      var n = t(r, a, s);
                      return "string" != typeof n || l || o[n]
                        ? l
                          ? !(i = n)
                          : void 0
                        : (r.dataTypes.unshift(n), u(n), !1);
                    }),
                    i
                  );
                }
                return u(r.dataTypes[0]) || (!o["*"] && u("*"));
              }
              function $t(e, t) {
                var n,
                  i,
                  r = T.ajaxSettings.flatOptions || {};
                for (n in t)
                  void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && T.extend(!0, e, i), e;
              }
              (It.href = Ct.href),
                T.extend({
                  active: 0,
                  lastModified: {},
                  etag: {},
                  ajaxSettings: {
                    url: Ct.href,
                    type: "GET",
                    isLocal:
                      /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        Ct.protocol
                      ),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType:
                      "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                      "*": Ht,
                      text: "text/plain",
                      html: "text/html",
                      xml: "application/xml, text/xml",
                      json: "application/json, text/javascript",
                    },
                    contents: {
                      xml: /\bxml\b/,
                      html: /\bhtml/,
                      json: /\bjson\b/,
                    },
                    responseFields: {
                      xml: "responseXML",
                      text: "responseText",
                      json: "responseJSON",
                    },
                    converters: {
                      "* text": String,
                      "text html": !0,
                      "text json": JSON.parse,
                      "text xml": T.parseXML,
                    },
                    flatOptions: { url: !0, context: !0 },
                  },
                  ajaxSetup: function (e, t) {
                    return t
                      ? $t($t(e, T.ajaxSettings), t)
                      : $t(T.ajaxSettings, e);
                  },
                  ajaxPrefilter: Pt(Rt),
                  ajaxTransport: Pt(Ut),
                  ajax: function (e, t) {
                    "object" == typeof e && ((t = e), (e = void 0)),
                      (t = t || {});
                    var c,
                      d,
                      h,
                      n,
                      f,
                      i,
                      p,
                      g,
                      r,
                      a,
                      m = T.ajaxSetup({}, t),
                      v = m.context || m,
                      y =
                        m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                      b = T.Deferred(),
                      w = T.Callbacks("once memory"),
                      x = m.statusCode || {},
                      s = {},
                      o = {},
                      l = "canceled",
                      D = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                          var t;
                          if (p) {
                            if (!n)
                              for (n = {}; (t = Lt.exec(h)); )
                                n[t[1].toLowerCase() + " "] = (
                                  n[t[1].toLowerCase() + " "] || []
                                ).concat(t[2]);
                            t = n[e.toLowerCase() + " "];
                          }
                          return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                          return p ? h : null;
                        },
                        setRequestHeader: function (e, t) {
                          return (
                            null == p &&
                              ((e = o[e.toLowerCase()] =
                                o[e.toLowerCase()] || e),
                              (s[e] = t)),
                            this
                          );
                        },
                        overrideMimeType: function (e) {
                          return null == p && (m.mimeType = e), this;
                        },
                        statusCode: function (e) {
                          var t;
                          if (e)
                            if (p) D.always(e[D.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                          return this;
                        },
                        abort: function (e) {
                          var t = e || l;
                          return c && c.abort(t), u(0, t), this;
                        },
                      };
                    if (
                      (b.promise(D),
                      (m.url = ((e || m.url || Ct.href) + "").replace(
                        Ot,
                        Ct.protocol + "//"
                      )),
                      (m.type = t.method || t.type || m.method || m.type),
                      (m.dataTypes = (m.dataType || "*")
                        .toLowerCase()
                        .match(F) || [""]),
                      null == m.crossDomain)
                    ) {
                      i = k.createElement("a");
                      try {
                        (i.href = m.url),
                          (i.href = i.href),
                          (m.crossDomain =
                            It.protocol + "//" + It.host !=
                            i.protocol + "//" + i.host);
                      } catch (e) {
                        m.crossDomain = !0;
                      }
                    }
                    if (
                      (m.data &&
                        m.processData &&
                        "string" != typeof m.data &&
                        (m.data = T.param(m.data, m.traditional)),
                      Wt(Rt, m, t, D),
                      p)
                    )
                      return D;
                    for (r in ((g = T.event && m.global) &&
                      0 == T.active++ &&
                      T.event.trigger("ajaxStart"),
                    (m.type = m.type.toUpperCase()),
                    (m.hasContent = !Ft.test(m.type)),
                    (d = m.url.replace(_t, "")),
                    m.hasContent
                      ? m.data &&
                        m.processData &&
                        0 ===
                          (m.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                          ) &&
                        (m.data = m.data.replace(jt, "+"))
                      : ((a = m.url.slice(d.length)),
                        m.data &&
                          (m.processData || "string" == typeof m.data) &&
                          ((d += (Tt.test(d) ? "&" : "?") + m.data),
                          delete m.data),
                        !1 === m.cache &&
                          ((d = d.replace(qt, "$1")),
                          (a = (Tt.test(d) ? "&" : "?") + "_=" + kt++ + a)),
                        (m.url = d + a)),
                    m.ifModified &&
                      (T.lastModified[d] &&
                        D.setRequestHeader(
                          "If-Modified-Since",
                          T.lastModified[d]
                        ),
                      T.etag[d] &&
                        D.setRequestHeader("If-None-Match", T.etag[d])),
                    ((m.data && m.hasContent && !1 !== m.contentType) ||
                      t.contentType) &&
                      D.setRequestHeader("Content-Type", m.contentType),
                    D.setRequestHeader(
                      "Accept",
                      m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                        ? m.accepts[m.dataTypes[0]] +
                            ("*" !== m.dataTypes[0]
                              ? ", " + Ht + "; q=0.01"
                              : "")
                        : m.accepts["*"]
                    ),
                    m.headers))
                      D.setRequestHeader(r, m.headers[r]);
                    if (
                      m.beforeSend &&
                      (!1 === m.beforeSend.call(v, D, m) || p)
                    )
                      return D.abort();
                    if (
                      ((l = "abort"),
                      w.add(m.complete),
                      D.done(m.success),
                      D.fail(m.error),
                      (c = Wt(Ut, m, t, D)))
                    ) {
                      if (
                        ((D.readyState = 1),
                        g && y.trigger("ajaxSend", [D, m]),
                        p)
                      )
                        return D;
                      m.async &&
                        0 < m.timeout &&
                        (f = C.setTimeout(function () {
                          D.abort("timeout");
                        }, m.timeout));
                      try {
                        (p = !1), c.send(s, u);
                      } catch (e) {
                        if (p) throw e;
                        u(-1, e);
                      }
                    } else u(-1, "No Transport");
                    function u(e, t, n, i) {
                      var r,
                        a,
                        s,
                        o,
                        l,
                        u = t;
                      p ||
                        ((p = !0),
                        f && C.clearTimeout(f),
                        (c = void 0),
                        (h = i || ""),
                        (D.readyState = 0 < e ? 4 : 0),
                        (r = (200 <= e && e < 300) || 304 === e),
                        n &&
                          (o = (function (e, t, n) {
                            for (
                              var i, r, a, s, o = e.contents, l = e.dataTypes;
                              "*" === l[0];

                            )
                              l.shift(),
                                void 0 === i &&
                                  (i =
                                    e.mimeType ||
                                    t.getResponseHeader("Content-Type"));
                            if (i)
                              for (r in o)
                                if (o[r] && o[r].test(i)) {
                                  l.unshift(r);
                                  break;
                                }
                            if (l[0] in n) a = l[0];
                            else {
                              for (r in n) {
                                if (!l[0] || e.converters[r + " " + l[0]]) {
                                  a = r;
                                  break;
                                }
                                s || (s = r);
                              }
                              a = a || s;
                            }
                            if (a) return a !== l[0] && l.unshift(a), n[a];
                          })(m, D, n)),
                        (o = (function (e, t, n, i) {
                          var r,
                            a,
                            s,
                            o,
                            l,
                            u = {},
                            c = e.dataTypes.slice();
                          if (c[1])
                            for (s in e.converters)
                              u[s.toLowerCase()] = e.converters[s];
                          for (a = c.shift(); a; )
                            if (
                              (e.responseFields[a] &&
                                (n[e.responseFields[a]] = t),
                              !l &&
                                i &&
                                e.dataFilter &&
                                (t = e.dataFilter(t, e.dataType)),
                              (l = a),
                              (a = c.shift()))
                            )
                              if ("*" === a) a = l;
                              else if ("*" !== l && l !== a) {
                                if (!(s = u[l + " " + a] || u["* " + a]))
                                  for (r in u)
                                    if (
                                      (o = r.split(" "))[1] === a &&
                                      (s = u[l + " " + o[0]] || u["* " + o[0]])
                                    ) {
                                      !0 === s
                                        ? (s = u[r])
                                        : !0 !== u[r] &&
                                          ((a = o[0]), c.unshift(o[1]));
                                      break;
                                    }
                                if (!0 !== s)
                                  if (s && e.throws) t = s(t);
                                  else
                                    try {
                                      t = s(t);
                                    } catch (e) {
                                      return {
                                        state: "parsererror",
                                        error: s
                                          ? e
                                          : "No conversion from " +
                                            l +
                                            " to " +
                                            a,
                                      };
                                    }
                              }
                          return { state: "success", data: t };
                        })(m, o, D, r)),
                        r
                          ? (m.ifModified &&
                              ((l = D.getResponseHeader("Last-Modified")) &&
                                (T.lastModified[d] = l),
                              (l = D.getResponseHeader("etag")) &&
                                (T.etag[d] = l)),
                            204 === e || "HEAD" === m.type
                              ? (u = "nocontent")
                              : 304 === e
                              ? (u = "notmodified")
                              : ((u = o.state),
                                (a = o.data),
                                (r = !(s = o.error))))
                          : ((s = u),
                            (!e && u) || ((u = "error"), e < 0 && (e = 0))),
                        (D.status = e),
                        (D.statusText = (t || u) + ""),
                        r
                          ? b.resolveWith(v, [a, u, D])
                          : b.rejectWith(v, [D, u, s]),
                        D.statusCode(x),
                        (x = void 0),
                        g &&
                          y.trigger(r ? "ajaxSuccess" : "ajaxError", [
                            D,
                            m,
                            r ? a : s,
                          ]),
                        w.fireWith(v, [D, u]),
                        g &&
                          (y.trigger("ajaxComplete", [D, m]),
                          --T.active || T.event.trigger("ajaxStop")));
                    }
                    return D;
                  },
                  getJSON: function (e, t, n) {
                    return T.get(e, t, n, "json");
                  },
                  getScript: function (e, t) {
                    return T.get(e, void 0, t, "script");
                  },
                }),
                T.each(["get", "post"], function (e, r) {
                  T[r] = function (e, t, n, i) {
                    return (
                      y(t) && ((i = i || n), (n = t), (t = void 0)),
                      T.ajax(
                        T.extend(
                          { url: e, type: r, dataType: i, data: t, success: n },
                          T.isPlainObject(e) && e
                        )
                      )
                    );
                  };
                }),
                (T._evalUrl = function (e, t) {
                  return T.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: { "text script": function () {} },
                    dataFilter: function (e) {
                      T.globalEval(e, t);
                    },
                  });
                }),
                T.fn.extend({
                  wrapAll: function (e) {
                    var t;
                    return (
                      this[0] &&
                        (y(e) && (e = e.call(this[0])),
                        (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                          .map(function () {
                            for (var e = this; e.firstElementChild; )
                              e = e.firstElementChild;
                            return e;
                          })
                          .append(this)),
                      this
                    );
                  },
                  wrapInner: function (n) {
                    return y(n)
                      ? this.each(function (e) {
                          T(this).wrapInner(n.call(this, e));
                        })
                      : this.each(function () {
                          var e = T(this),
                            t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                        });
                  },
                  wrap: function (t) {
                    var n = y(t);
                    return this.each(function (e) {
                      T(this).wrapAll(n ? t.call(this, e) : t);
                    });
                  },
                  unwrap: function (e) {
                    return (
                      this.parent(e)
                        .not("body")
                        .each(function () {
                          T(this).replaceWith(this.childNodes);
                        }),
                      this
                    );
                  },
                }),
                (T.expr.pseudos.hidden = function (e) {
                  return !T.expr.pseudos.visible(e);
                }),
                (T.expr.pseudos.visible = function (e) {
                  return !!(
                    e.offsetWidth ||
                    e.offsetHeight ||
                    e.getClientRects().length
                  );
                }),
                (T.ajaxSettings.xhr = function () {
                  try {
                    return new C.XMLHttpRequest();
                  } catch (e) {}
                });
              var Vt = { 0: 200, 1223: 204 },
                zt = T.ajaxSettings.xhr();
              (v.cors = !!zt && "withCredentials" in zt),
                (v.ajax = zt = !!zt),
                T.ajaxTransport(function (r) {
                  var a, s;
                  if (v.cors || (zt && !r.crossDomain))
                    return {
                      send: function (e, t) {
                        var n,
                          i = r.xhr();
                        if (
                          (i.open(
                            r.type,
                            r.url,
                            r.async,
                            r.username,
                            r.password
                          ),
                          r.xhrFields)
                        )
                          for (n in r.xhrFields) i[n] = r.xhrFields[n];
                        for (n in (r.mimeType &&
                          i.overrideMimeType &&
                          i.overrideMimeType(r.mimeType),
                        r.crossDomain ||
                          e["X-Requested-With"] ||
                          (e["X-Requested-With"] = "XMLHttpRequest"),
                        e))
                          i.setRequestHeader(n, e[n]);
                        (a = function (e) {
                          return function () {
                            a &&
                              ((a =
                                s =
                                i.onload =
                                i.onerror =
                                i.onabort =
                                i.ontimeout =
                                i.onreadystatechange =
                                  null),
                              "abort" === e
                                ? i.abort()
                                : "error" === e
                                ? "number" != typeof i.status
                                  ? t(0, "error")
                                  : t(i.status, i.statusText)
                                : t(
                                    Vt[i.status] || i.status,
                                    i.statusText,
                                    "text" !== (i.responseType || "text") ||
                                      "string" != typeof i.responseText
                                      ? { binary: i.response }
                                      : { text: i.responseText },
                                    i.getAllResponseHeaders()
                                  ));
                          };
                        }),
                          (i.onload = a()),
                          (s = i.onerror = i.ontimeout = a("error")),
                          void 0 !== i.onabort
                            ? (i.onabort = s)
                            : (i.onreadystatechange = function () {
                                4 === i.readyState &&
                                  C.setTimeout(function () {
                                    a && s();
                                  });
                              }),
                          (a = a("abort"));
                        try {
                          i.send((r.hasContent && r.data) || null);
                        } catch (e) {
                          if (a) throw e;
                        }
                      },
                      abort: function () {
                        a && a();
                      },
                    };
                }),
                T.ajaxPrefilter(function (e) {
                  e.crossDomain && (e.contents.script = !1);
                }),
                T.ajaxSetup({
                  accepts: {
                    script:
                      "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                  },
                  contents: { script: /\b(?:java|ecma)script\b/ },
                  converters: {
                    "text script": function (e) {
                      return T.globalEval(e), e;
                    },
                  },
                }),
                T.ajaxPrefilter("script", function (e) {
                  void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET");
                }),
                T.ajaxTransport("script", function (n) {
                  var i, r;
                  if (n.crossDomain || n.scriptAttrs)
                    return {
                      send: function (e, t) {
                        (i = T("<script>")
                          .attr(n.scriptAttrs || {})
                          .prop({ charset: n.scriptCharset, src: n.url })
                          .on(
                            "load error",
                            (r = function (e) {
                              i.remove(),
                                (r = null),
                                e && t("error" === e.type ? 404 : 200, e.type);
                            })
                          )),
                          k.head.appendChild(i[0]);
                      },
                      abort: function () {
                        r && r();
                      },
                    };
                });
              var Bt,
                Yt = [],
                Xt = /(=)\?(?=&|$)|\?\?/;
              T.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                  var e = Yt.pop() || T.expando + "_" + kt++;
                  return (this[e] = !0), e;
                },
              }),
                T.ajaxPrefilter("json jsonp", function (e, t, n) {
                  var i,
                    r,
                    a,
                    s =
                      !1 !== e.jsonp &&
                      (Xt.test(e.url)
                        ? "url"
                        : "string" == typeof e.data &&
                          0 ===
                            (e.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                            ) &&
                          Xt.test(e.data) &&
                          "data");
                  if (s || "jsonp" === e.dataTypes[0])
                    return (
                      (i = e.jsonpCallback =
                        y(e.jsonpCallback)
                          ? e.jsonpCallback()
                          : e.jsonpCallback),
                      s
                        ? (e[s] = e[s].replace(Xt, "$1" + i))
                        : !1 !== e.jsonp &&
                          (e.url +=
                            (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                      (e.converters["script json"] = function () {
                        return a || T.error(i + " was not called"), a[0];
                      }),
                      (e.dataTypes[0] = "json"),
                      (r = C[i]),
                      (C[i] = function () {
                        a = arguments;
                      }),
                      n.always(function () {
                        void 0 === r ? T(C).removeProp(i) : (C[i] = r),
                          e[i] &&
                            ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                          a && y(r) && r(a[0]),
                          (a = r = void 0);
                      }),
                      "script"
                    );
                }),
                (v.createHTMLDocument =
                  (((Bt =
                    k.implementation.createHTMLDocument("").body).innerHTML =
                    "<form></form><form></form>"),
                  2 === Bt.childNodes.length)),
                (T.parseHTML = function (e, t, n) {
                  return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                      t ||
                        (v.createHTMLDocument
                          ? (((i = (t =
                              k.implementation.createHTMLDocument(
                                ""
                              )).createElement("base")).href = k.location.href),
                            t.head.appendChild(i))
                          : (t = k)),
                      (a = !n && []),
                      (r = A.exec(e))
                        ? [t.createElement(r[1])]
                        : ((r = we([e], t, a)),
                          a && a.length && T(a).remove(),
                          T.merge([], r.childNodes)));
                  var i, r, a;
                }),
                (T.fn.load = function (e, t, n) {
                  var i,
                    r,
                    a,
                    s = this,
                    o = e.indexOf(" ");
                  return (
                    -1 < o && ((i = vt(e.slice(o))), (e = e.slice(0, o))),
                    y(t)
                      ? ((n = t), (t = void 0))
                      : t && "object" == typeof t && (r = "POST"),
                    0 < s.length &&
                      T.ajax({
                        url: e,
                        type: r || "GET",
                        dataType: "html",
                        data: t,
                      })
                        .done(function (e) {
                          (a = arguments),
                            s.html(
                              i ? T("<div>").append(T.parseHTML(e)).find(i) : e
                            );
                        })
                        .always(
                          n &&
                            function (e, t) {
                              s.each(function () {
                                n.apply(this, a || [e.responseText, t, e]);
                              });
                            }
                        ),
                    this
                  );
                }),
                T.each(
                  [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                  ],
                  function (e, t) {
                    T.fn[t] = function (e) {
                      return this.on(t, e);
                    };
                  }
                ),
                (T.expr.pseudos.animated = function (t) {
                  return T.grep(T.timers, function (e) {
                    return t === e.elem;
                  }).length;
                }),
                (T.offset = {
                  setOffset: function (e, t, n) {
                    var i,
                      r,
                      a,
                      s,
                      o,
                      l,
                      u = T.css(e, "position"),
                      c = T(e),
                      d = {};
                    "static" === u && (e.style.position = "relative"),
                      (o = c.offset()),
                      (a = T.css(e, "top")),
                      (l = T.css(e, "left")),
                      (r =
                        ("absolute" === u || "fixed" === u) &&
                        -1 < (a + l).indexOf("auto")
                          ? ((s = (i = c.position()).top), i.left)
                          : ((s = parseFloat(a) || 0), parseFloat(l) || 0)),
                      y(t) && (t = t.call(e, n, T.extend({}, o))),
                      null != t.top && (d.top = t.top - o.top + s),
                      null != t.left && (d.left = t.left - o.left + r),
                      "using" in t ? t.using.call(e, d) : c.css(d);
                  },
                }),
                T.fn.extend({
                  offset: function (t) {
                    if (arguments.length)
                      return void 0 === t
                        ? this
                        : this.each(function (e) {
                            T.offset.setOffset(this, t, e);
                          });
                    var e,
                      n,
                      i = this[0];
                    return i
                      ? i.getClientRects().length
                        ? ((e = i.getBoundingClientRect()),
                          (n = i.ownerDocument.defaultView),
                          {
                            top: e.top + n.pageYOffset,
                            left: e.left + n.pageXOffset,
                          })
                        : { top: 0, left: 0 }
                      : void 0;
                  },
                  position: function () {
                    if (this[0]) {
                      var e,
                        t,
                        n,
                        i = this[0],
                        r = { top: 0, left: 0 };
                      if ("fixed" === T.css(i, "position"))
                        t = i.getBoundingClientRect();
                      else {
                        for (
                          t = this.offset(),
                            n = i.ownerDocument,
                            e = i.offsetParent || n.documentElement;
                          e &&
                          (e === n.body || e === n.documentElement) &&
                          "static" === T.css(e, "position");

                        )
                          e = e.parentNode;
                        e &&
                          e !== i &&
                          1 === e.nodeType &&
                          (((r = T(e).offset()).top += T.css(
                            e,
                            "borderTopWidth",
                            !0
                          )),
                          (r.left += T.css(e, "borderLeftWidth", !0)));
                      }
                      return {
                        top: t.top - r.top - T.css(i, "marginTop", !0),
                        left: t.left - r.left - T.css(i, "marginLeft", !0),
                      };
                    }
                  },
                  offsetParent: function () {
                    return this.map(function () {
                      for (
                        var e = this.offsetParent;
                        e && "static" === T.css(e, "position");

                      )
                        e = e.offsetParent;
                      return e || ie;
                    });
                  },
                }),
                T.each(
                  { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                  function (t, r) {
                    var a = "pageYOffset" === r;
                    T.fn[t] = function (e) {
                      return W(
                        this,
                        function (e, t, n) {
                          var i;
                          if (
                            (b(e)
                              ? (i = e)
                              : 9 === e.nodeType && (i = e.defaultView),
                            void 0 === n)
                          )
                            return i ? i[r] : e[t];
                          i
                            ? i.scrollTo(
                                a ? i.pageXOffset : n,
                                a ? n : i.pageYOffset
                              )
                            : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                      );
                    };
                  }
                ),
                T.each(["top", "left"], function (e, n) {
                  T.cssHooks[n] = $e(v.pixelPosition, function (e, t) {
                    if (t)
                      return (
                        (t = We(e, n)),
                        He.test(t) ? T(e).position()[n] + "px" : t
                      );
                  });
                }),
                T.each({ Height: "height", Width: "width" }, function (s, o) {
                  T.each(
                    { padding: "inner" + s, content: o, "": "outer" + s },
                    function (i, a) {
                      T.fn[a] = function (e, t) {
                        var n =
                            arguments.length && (i || "boolean" != typeof e),
                          r = i || (!0 === e || !0 === t ? "margin" : "border");
                        return W(
                          this,
                          function (e, t, n) {
                            var i;
                            return b(e)
                              ? 0 === a.indexOf("outer")
                                ? e["inner" + s]
                                : e.document.documentElement["client" + s]
                              : 9 === e.nodeType
                              ? ((i = e.documentElement),
                                Math.max(
                                  e.body["scroll" + s],
                                  i["scroll" + s],
                                  e.body["offset" + s],
                                  i["offset" + s],
                                  i["client" + s]
                                ))
                              : void 0 === n
                              ? T.css(e, t, r)
                              : T.style(e, t, n, r);
                          },
                          o,
                          n ? e : void 0,
                          n
                        );
                      };
                    }
                  );
                }),
                T.each(
                  "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                  ),
                  function (e, n) {
                    T.fn[n] = function (e, t) {
                      return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                    };
                  }
                ),
                T.fn.extend({
                  hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                  },
                }),
                T.fn.extend({
                  bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                  },
                  unbind: function (e, t) {
                    return this.off(e, null, t);
                  },
                  delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i);
                  },
                  undelegate: function (e, t, n) {
                    return 1 === arguments.length
                      ? this.off(e, "**")
                      : this.off(t, e || "**", n);
                  },
                }),
                (T.proxy = function (e, t) {
                  var n, i, r;
                  if (
                    ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                    y(e))
                  )
                    return (
                      (i = o.call(arguments, 2)),
                      ((r = function () {
                        return e.apply(t || this, i.concat(o.call(arguments)));
                      }).guid = e.guid =
                        e.guid || T.guid++),
                      r
                    );
                }),
                (T.holdReady = function (e) {
                  e ? T.readyWait++ : T.ready(!0);
                }),
                (T.isArray = Array.isArray),
                (T.parseJSON = JSON.parse),
                (T.nodeName = E),
                (T.isFunction = y),
                (T.isWindow = b),
                (T.camelCase = B),
                (T.type = x),
                (T.now = Date.now),
                (T.isNumeric = function (e) {
                  var t = T.type(e);
                  return (
                    ("number" === t || "string" === t) &&
                    !isNaN(e - parseFloat(e))
                  );
                }),
                "function" == typeof Zt &&
                  Zt.amd &&
                  Zt("jquery", [], function () {
                    return T;
                  });
              var Jt = C.jQuery,
                Gt = C.$;
              return (
                (T.noConflict = function (e) {
                  return (
                    C.$ === T && (C.$ = Gt),
                    e && C.jQuery === T && (C.jQuery = Jt),
                    T
                  );
                }),
                e || (C.jQuery = C.$ = T),
                T
              );
            }),
              i("undefined" != typeof $ ? $ : window.$);
          }.call(e, void 0, void 0, void 0, void 0, function (e) {
            t.exports = e;
          }));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    4: [
      function (e, t, n) {
        "use strict";
        var a = Object.prototype.hasOwnProperty;
        function s(e) {
          try {
            return decodeURIComponent(e.replace(/\+/g, " "));
          } catch (e) {
            return null;
          }
        }
        (n.stringify = function (e, t) {
          t = t || "";
          var n,
            i,
            r = [];
          for (i in ("string" != typeof t && (t = "?"), e))
            if (a.call(e, i)) {
              if (
                ((n = e[i]) || (null != n && !isNaN(n)) || (n = ""),
                (i = encodeURIComponent(i)),
                (n = encodeURIComponent(n)),
                null === i || null === n)
              )
                continue;
              r.push(i + "=" + n);
            }
          return r.length ? t + r.join("&") : "";
        }),
          (n.parse = function (e) {
            for (var t, n = /([^=?&]+)=?([^&]*)/g, i = {}; (t = n.exec(e)); ) {
              var r = s(t[1]),
                a = s(t[2]);
              null === r || null === a || r in i || (i[r] = a);
            }
            return i;
          });
      },
      {},
    ],
    5: [
      function (e, t, n) {
        "use strict";
        t.exports = function (e, t) {
          if (((t = t.split(":")[0]), !(e = +e))) return !1;
          switch (t) {
            case "http":
            case "ws":
              return 80 !== e;
            case "https":
            case "wss":
              return 443 !== e;
            case "ftp":
              return 21 !== e;
            case "gopher":
              return 70 !== e;
            case "file":
              return !1;
          }
          return 0 !== e;
        };
      },
      {},
    ],
    6: [
      function (e, i, t) {
        (function (a) {
          "use strict";
          var f = e("requires-port"),
            p = e("querystringify"),
            s = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            n = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            t = new RegExp(
              "^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+"
            );
          function g(e) {
            return (e || "").toString().replace(t, "");
          }
          var m = [
              ["#", "hash"],
              ["?", "query"],
              function (e) {
                return e.replace("\\", "/");
              },
              ["/", "pathname"],
              ["@", "auth", 1],
              [NaN, "host", void 0, 1, 1],
              [/:(\d+)$/, "port", void 0, 1],
              [NaN, "hostname", void 0, 1, 1],
            ],
            o = { hash: 1, query: 1 };
          function v(e) {
            var t,
              n =
                ("undefined" != typeof window
                  ? window
                  : void 0 !== a
                  ? a
                  : "undefined" != typeof self
                  ? self
                  : {}
                ).location || {},
              i = {},
              r = typeof (e = e || n);
            if ("blob:" === e.protocol) i = new b(unescape(e.pathname), {});
            else if ("string" === r)
              for (t in ((i = new b(e, {})), o)) delete i[t];
            else if ("object" === r) {
              for (t in e) t in o || (i[t] = e[t]);
              void 0 === i.slashes && (i.slashes = s.test(e.href));
            }
            return i;
          }
          function y(e) {
            e = g(e);
            var t = n.exec(e);
            return {
              protocol: t[1] ? t[1].toLowerCase() : "",
              slashes: !!t[2],
              rest: t[3],
            };
          }
          function b(e, t, n) {
            if (((e = g(e)), !(this instanceof b))) return new b(e, t, n);
            var i,
              r,
              a,
              s,
              o,
              l,
              u = m.slice(),
              c = typeof t,
              d = this,
              h = 0;
            for (
              "object" !== c && "string" !== c && ((n = t), (t = null)),
                n && "function" != typeof n && (n = p.parse),
                t = v(t),
                i = !(r = y(e || "")).protocol && !r.slashes,
                d.slashes = r.slashes || (i && t.slashes),
                d.protocol = r.protocol || t.protocol || "",
                e = r.rest,
                r.slashes || (u[3] = [/(.*)/, "pathname"]);
              h < u.length;
              h++
            )
              "function" != typeof (s = u[h])
                ? ((a = s[0]),
                  (l = s[1]),
                  a != a
                    ? (d[l] = e)
                    : "string" == typeof a
                    ? ~(o = e.indexOf(a)) &&
                      (e =
                        "number" == typeof s[2]
                          ? ((d[l] = e.slice(0, o)), e.slice(o + s[2]))
                          : ((d[l] = e.slice(o)), e.slice(0, o)))
                    : (o = a.exec(e)) &&
                      ((d[l] = o[1]), (e = e.slice(0, o.index))),
                  (d[l] = d[l] || (i && s[3] && t[l]) || ""),
                  s[4] && (d[l] = d[l].toLowerCase()))
                : (e = s(e));
            n && (d.query = n(d.query)),
              i &&
                t.slashes &&
                "/" !== d.pathname.charAt(0) &&
                ("" !== d.pathname || "" !== t.pathname) &&
                (d.pathname = (function (e, t) {
                  if ("" === e) return t;
                  for (
                    var n = (t || "/")
                        .split("/")
                        .slice(0, -1)
                        .concat(e.split("/")),
                      i = n.length,
                      r = n[i - 1],
                      a = !1,
                      s = 0;
                    i--;

                  )
                    "." === n[i]
                      ? n.splice(i, 1)
                      : ".." === n[i]
                      ? (n.splice(i, 1), s++)
                      : s && (0 === i && (a = !0), n.splice(i, 1), s--);
                  return (
                    a && n.unshift(""),
                    ("." !== r && ".." !== r) || n.push(""),
                    n.join("/")
                  );
                })(d.pathname, t.pathname)),
              f(d.port, d.protocol) || ((d.host = d.hostname), (d.port = "")),
              (d.username = d.password = ""),
              d.auth &&
                ((s = d.auth.split(":")),
                (d.username = s[0] || ""),
                (d.password = s[1] || "")),
              (d.origin =
                d.protocol && d.host && "file:" !== d.protocol
                  ? d.protocol + "//" + d.host
                  : "null"),
              (d.href = d.toString());
          }
          (b.prototype = {
            set: function (e, t, n) {
              var i = this;
              switch (e) {
                case "query":
                  "string" == typeof t && t.length && (t = (n || p.parse)(t)),
                    (i[e] = t);
                  break;
                case "port":
                  (i[e] = t),
                    f(t, i.protocol)
                      ? t && (i.host = i.hostname + ":" + t)
                      : ((i.host = i.hostname), (i[e] = ""));
                  break;
                case "hostname":
                  (i[e] = t), i.port && (t += ":" + i.port), (i.host = t);
                  break;
                case "host":
                  (i[e] = t),
                    /:\d+$/.test(t)
                      ? ((t = t.split(":")),
                        (i.port = t.pop()),
                        (i.hostname = t.join(":")))
                      : ((i.hostname = t), (i.port = ""));
                  break;
                case "protocol":
                  (i.protocol = t.toLowerCase()), (i.slashes = !n);
                  break;
                case "pathname":
                case "hash":
                  if (t) {
                    var r = "pathname" === e ? "/" : "#";
                    i[e] = t.charAt(0) !== r ? r + t : t;
                  } else i[e] = t;
                  break;
                default:
                  i[e] = t;
              }
              for (var a = 0; a < m.length; a++) {
                var s = m[a];
                s[4] && (i[s[1]] = i[s[1]].toLowerCase());
              }
              return (
                (i.origin =
                  i.protocol && i.host && "file:" !== i.protocol
                    ? i.protocol + "//" + i.host
                    : "null"),
                (i.href = i.toString()),
                i
              );
            },
            toString: function (e) {
              (e && "function" == typeof e) || (e = p.stringify);
              var t,
                n = this,
                i = n.protocol;
              i && ":" !== i.charAt(i.length - 1) && (i += ":");
              var r = i + (n.slashes ? "//" : "");
              return (
                n.username &&
                  ((r += n.username),
                  n.password && (r += ":" + n.password),
                  (r += "@")),
                (r += n.host + n.pathname),
                (t = "object" == typeof n.query ? e(n.query) : n.query) &&
                  (r += "?" !== t.charAt(0) ? "?" + t : t),
                n.hash && (r += n.hash),
                r
              );
            },
          }),
            (b.extractProtocol = y),
            (b.location = v),
            (b.trimLeft = g),
            (b.qs = p),
            (i.exports = b);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { querystringify: 4, "requires-port": 5 },
    ],
    7: [
      function (e, t, n) {
        "use strict";
        "delay.html" === window.pageId &&
          $(function () {
            setTimeout(function () {
              $("#container").append(
                '<div id="waitedForElement">Hello, World!</div>'
              );
            }, 1e4);
          });
      },
      {},
    ],
    8: [
      function (e, t, n) {
        "use strict";
        if ("dragdrop.html" === window.pageId) {
          var i = $("#droppable"),
            r = $("#draggable");
          i.on("dragover", function (e) {
            e.preventDefault();
          }),
            i.on("drop", function (e) {
              e.preventDefault();
              var t = e.originalEvent.dataTransfer.getData("text");
              e.target.appendChild(document.getElementById(t)),
                r.html("Dropped!");
            }),
            r.on("dragstart", function (e) {
              r.html("Dragging..."),
                e.originalEvent.dataTransfer.setData("text", e.target.id);
            }),
            r.on("dragend", function (e) {
              0 === i.children().length && r.html("Drag me!");
            });
        }
      },
      {},
    ],
    9: [
      function (e, t, n) {
        "use strict";
        if ("file-upload.html" === window.pageId) {
          var i = document.querySelector("#file-upload"),
            r = document.querySelector("#file-details"),
            a = "";
          i.addEventListener(
            "change",
            function () {
              if ("files" in i) {
                for (var e = i.files, t = 0; t < e.length; t++) {
                  var n = e[t];
                  a += "<br><strong>"
                    .concat(t + 1, ". ")
                    .concat(n.name, "</strong> (")
                    .concat(n.size, " bytes) <br>");
                }
                r.innerHTML = a;
              }
            },
            !1
          );
        }
      },
      {},
    ],
    10: [
      function (e, t, n) {
        "use strict";
        if ("form.html" === window.pageId) {
          var i = $("#infoForm");
          i.submit(function (e) {
            e.preventDefault(),
              i.valid()
                ? $("#submit-msg").removeClass("submit-msg-hidden")
                : $("#submit-msg").addClass("submit-msg-hidden");
          }),
            i.validate({
              rules: {
                firstName: "required",
                lastName: "required",
                gender: "required",
                dob: { required: !0, date: !0 },
                address: "required",
                email: { required: !0, email: !0 },
                password: "required",
                company: "required",
                role: "required",
              },
              errorPlacement: function (e, t) {
                t.is(":radio")
                  ? e.appendTo(t.parents(".radio-container"))
                  : e.insertAfter(t);
              },
            }),
            $("#dob").datepicker({ format: "mm/dd/yyyy" });
        }
      },
      {},
    ],
    11: [
      function (e, t, n) {
        "use strict";
        if ("grid.html" === window.pageId) {
          for (
            var r = function (e) {
                var t;
                return (
                  (t =
                    e < 20
                      ? "progress-bar-slow"
                      : e < 50
                      ? "progress-bar-medium"
                      : "progress-bar-quick"),
                  $(
                    '<div class="progress-bar ' +
                      t +
                      '" style="width:' +
                      e +
                      '%;"></div>'
                  )
                );
              },
              o = function (e, t) {
                var n = $('<tr data-index="' + e + '"></tr>');
                n.append('<td contenteditable="true">' + t[0] + "</td>"),
                  n.append('<td contenteditable="true">' + t[1] + "</td>"),
                  n.append('<td contenteditable="true">' + t[2] + "</td>");
                var i = $(
                  '<td class="completion" contenteditable="true" data-completion="' +
                    t[3] +
                    '"></td>'
                );
                return (
                  i.append(r(t[3])),
                  n.append(i),
                  n.append(
                    '<td><input type="text" class="grid-date" value="' +
                      t[4] +
                      '"></td>'
                  ),
                  n.append(
                    '<td><input type="text" class="grid-date" value="' +
                      t[5] +
                      '"></td>'
                  ),
                  n.append(
                    '<td><input type="button" class="row-reset" value="Reset"></td>'
                  ),
                  l(n),
                  n
                );
              },
              l = function (e) {
                e.find(".grid-date").datepicker({ format: "mm/dd/yyyy" }),
                  e
                    .find(".completion")
                    .on("focus", function (e) {
                      var t = $(this),
                        n = t.children(".progress-bar").first(),
                        i = t.attr("data-completion");
                      n.hide(), t.text(i);
                    })
                    .on("blur", function () {
                      var e = $(this),
                        t = e.text();
                      (t = parseInt(t)),
                        (isNaN(t) || t <= 0 || 100 < t) &&
                          (t = parseInt(e.attr("data-completion"))),
                        e.attr("data-completion", t);
                      e.text(""), e.append(r(t));
                    });
                var t = e.find(".row-reset").first(),
                  n = t.data("events");
                (n && n.click) ||
                  t.on("click", function () {
                    var e = $(this).parents("tr").first(),
                      t = e.attr("data-index"),
                      n = s[t];
                    i(e, n);
                  });
              },
              i = function (e, t) {
                for (
                  var n = e.attr("data-index"),
                    i = o(n, t),
                    r = i.children("td"),
                    a = e.children("td"),
                    s = 0;
                  s < a.length - 1;
                  s++
                )
                  a.eq(s).empty(), a.eq(s).html(r.eq(s).html()), i.empty();
                l(e);
              },
              a = 0,
              s = [];
            a < 11;
            a++
          )
            s[a] = [
              "Task " + a,
              "This is a sample task description",
              "5 days",
              Math.round(100 * Math.random()),
              "08/01/2017",
              "08/05/2017",
            ];
          var u = $("#grid").children("tbody").first();
          for (a = 0; a < s.length; a++) u.append(o(a, s[a]));
        }
      },
      {},
    ],
    12: [
      function (e, t, n) {
        "use strict";
        if ("js-dialog.html" === window.pageId) {
          var i = $("#prompt"),
            r = $("#message-container");
          r.hide(),
            i.on("click", function (e) {
              var t = prompt("Please enter your name"),
                n = "";
              null !== t &&
                (r.removeClass(),
                0 === t.trim().length
                  ? ((n = "You haven't entered your name"),
                    r.text(n),
                    r.addClass("alert alert-warning"))
                  : ((n = "Hello " + t + "!"),
                    r.text(n),
                    r.addClass("alert alert-info")),
                r.show());
            });
        }
      },
      {},
    ],
    13: [
      function (e, t, n) {
        "use strict";
        if ("keypress.html" === window.pageId) {
          var i = $("#key-input"),
            r = $("#result");
          i.on("keydown", function (e) {
            13 == e.which && e.preventDefault();
            var t = "Key pressed: " + e.key;
            r.text(t);
          });
        }
      },
      {},
    ],
    14: [
      function (e, t, n) {
        "use strict";
        for (
          var i, r = window.location.pathname.split("/");
          "/" === (i = r.pop());

        );
        (window.pageId = i),
          console.log(window.pageId),
          e("jquery"),
          e("jquery-validation"),
          e("bootstrap-datepicker"),
          e("../js/form.js"),
          e("../js/dragdrop.js"),
          e("../js/grid.js"),
          e("../js/js-dialog.js"),
          e("../js/file-upload.js"),
          e("../js/shadow-dom.js"),
          e("../js/keypress.js"),
          e("../js/open-window.js"),
          e("../js/delay.js");
      },
      {
        "../js/delay.js": 7,
        "../js/dragdrop.js": 8,
        "../js/file-upload.js": 9,
        "../js/form.js": 10,
        "../js/grid.js": 11,
        "../js/js-dialog.js": 12,
        "../js/keypress.js": 13,
        "../js/open-window.js": 15,
        "../js/shadow-dom.js": 16,
        "bootstrap-datepicker": 1,
        jquery: 3,
        "jquery-validation": 2,
      },
    ],
    15: [
      function (e, t, n) {
        "use strict";
        var i = e("url-parse");
        if ("open-window.html" === window.pageId) {
          $(function () {
            $("#open-window").on("click", function () {
              var e = $("#window-title").val();
              e &&
                0 < e.trim().length &&
                window.open("open-window.html?title=" + e, "_blank");
            });
          });
          var r = i(window.location.href, !0);
          $("title").text(r.query.title);
        }
      },
      { "url-parse": 6 },
    ],
    16: [
      function (e, t, n) {
        "use strict";
        if ("shadow-dom.html" === window.pageId) {
          var i = function () {
              h = setInterval(function () {
                (f.milliseconds += 10),
                  1e3 <= f.milliseconds &&
                    ((f.seconds += 1), (f.milliseconds = 0)),
                  60 === f.seconds && ((f.minutes += 1), (f.seconds = 0)),
                  l();
              }, 10);
            },
            r = function () {
              s();
            },
            a = function () {
              o();
            },
            s = function () {
              clearInterval(h);
            },
            o = function () {
              s(), (f.minutes = f.seconds = f.milliseconds = 0), l();
            },
            l = function () {
              var e = ("000" + f.milliseconds).slice(-3),
                t = ("00" + f.seconds).slice(-2),
                n = f.minutes;
              v.innerText = n + ":" + t + ":" + e;
            },
            u = document.querySelector("#stopwatch").createShadowRoot(),
            c = document.querySelector("#stopwatch-template"),
            d = document.importNode(c.content, !0);
          u.appendChild(d);
          var h,
            f = { minutes: 0, seconds: 0, milliseconds: 0 },
            p = u.querySelector("#start"),
            g = u.querySelector("#stop"),
            m = u.querySelector("#reset"),
            v = u.querySelector("#time");
          p.addEventListener("click", function () {
            return i();
          }),
            g.addEventListener("click", function () {
              return r();
            }),
            m.addEventListener("click", function () {
              return a();
            }),
            l();
        }
      },
      {},
    ],
  },
  {},
  [14]
);
