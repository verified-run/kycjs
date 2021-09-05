/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const ServerRequest = $root.ServerRequest = ((ServerRequest) => {

    /**
     * Properties of a ServerRequest.
     * @exports IServerRequest
     * @interface IServerRequest
     * @property {string|null} [id] ServerRequest id
     * @property {ServerRequest.IFinish|null} [finish] ServerRequest finish
     * @property {ServerRequest.IFaceText|null} [faceText] ServerRequest faceText
     * @property {ServerRequest.IFaceAgreement|null} [faceAgreement] ServerRequest faceAgreement
     * @property {ServerRequest.IFaceMovement|null} [faceMovement] ServerRequest faceMovement
     * @property {ServerRequest.IIdCard|null} [idCard] ServerRequest idCard
     * @property {ServerRequest.IError|null} [error] ServerRequest error
     */

    /**
     * Constructs a new ServerRequest.
     * @exports ServerRequest
     * @classdesc Represents a ServerRequest.
     * @implements IServerRequest
     * @constructor
     * @param {IServerRequest=} [properties] Properties to set
     */
    function ServerRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerRequest id.
     * @member {string} id
     * @memberof ServerRequest
     * @instance
     */
    ServerRequest.prototype.id = "";

    /**
     * ServerRequest finish.
     * @member {ServerRequest.IFinish|null|undefined} finish
     * @memberof ServerRequest
     * @instance
     */
    ServerRequest.prototype.finish = null;

    /**
     * ServerRequest faceText.
     * @member {ServerRequest.IFaceText|null|undefined} faceText
     * @memberof ServerRequest
     * @instance
     */
    ServerRequest.prototype.faceText = null;

    /**
     * ServerRequest faceAgreement.
     * @member {ServerRequest.IFaceAgreement|null|undefined} faceAgreement
     * @memberof ServerRequest
     * @instance
     */
    ServerRequest.prototype.faceAgreement = null;

    /**
     * ServerRequest faceMovement.
     * @member {ServerRequest.IFaceMovement|null|undefined} faceMovement
     * @memberof ServerRequest
     * @instance
     */
    ServerRequest.prototype.faceMovement = null;

    /**
     * ServerRequest idCard.
     * @member {ServerRequest.IIdCard|null|undefined} idCard
     * @memberof ServerRequest
     * @instance
     */
    ServerRequest.prototype.idCard = null;

    /**
     * ServerRequest error.
     * @member {ServerRequest.IError|null|undefined} error
     * @memberof ServerRequest
     * @instance
     */
    ServerRequest.prototype.error = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * ServerRequest data.
     * @member {"finish"|"faceText"|"faceAgreement"|"faceMovement"|"idCard"|"error"|undefined} data
     * @memberof ServerRequest
     * @instance
     */
    Object.defineProperty(ServerRequest.prototype, "data", {
        get: $util.oneOfGetter($oneOfFields = ["finish", "faceText", "faceAgreement", "faceMovement", "idCard", "error"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ServerRequest instance using the specified properties.
     * @function create
     * @memberof ServerRequest
     * @static
     * @param {IServerRequest=} [properties] Properties to set
     * @returns {ServerRequest} ServerRequest instance
     */
    ServerRequest.create = function create(properties) {
        return new ServerRequest(properties);
    };

    /**
     * Encodes the specified ServerRequest message. Does not implicitly {@link ServerRequest.verify|verify} messages.
     * @function encode
     * @memberof ServerRequest
     * @static
     * @param {IServerRequest} message ServerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.finish != null && Object.hasOwnProperty.call(message, "finish"))
            $root.ServerRequest.Finish.encode(message.finish, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.faceText != null && Object.hasOwnProperty.call(message, "faceText"))
            $root.ServerRequest.FaceText.encode(message.faceText, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.faceAgreement != null && Object.hasOwnProperty.call(message, "faceAgreement"))
            $root.ServerRequest.FaceAgreement.encode(message.faceAgreement, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.faceMovement != null && Object.hasOwnProperty.call(message, "faceMovement"))
            $root.ServerRequest.FaceMovement.encode(message.faceMovement, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.idCard != null && Object.hasOwnProperty.call(message, "idCard"))
            $root.ServerRequest.IdCard.encode(message.idCard, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.ServerRequest.Error.encode(message.error, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerRequest message, length delimited. Does not implicitly {@link ServerRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerRequest
     * @static
     * @param {IServerRequest} message ServerRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ServerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerRequest} ServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 5:
                message.finish = $root.ServerRequest.Finish.decode(reader, reader.uint32());
                break;
            case 6:
                message.faceText = $root.ServerRequest.FaceText.decode(reader, reader.uint32());
                break;
            case 7:
                message.faceAgreement = $root.ServerRequest.FaceAgreement.decode(reader, reader.uint32());
                break;
            case 8:
                message.faceMovement = $root.ServerRequest.FaceMovement.decode(reader, reader.uint32());
                break;
            case 9:
                message.idCard = $root.ServerRequest.IdCard.decode(reader, reader.uint32());
                break;
            case 10:
                message.error = $root.ServerRequest.Error.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerRequest} ServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerRequest message.
     * @function verify
     * @memberof ServerRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.finish != null && message.hasOwnProperty("finish")) {
            properties.data = 1;
            {
                let error = $root.ServerRequest.Finish.verify(message.finish);
                if (error)
                    return "finish." + error;
            }
        }
        if (message.faceText != null && message.hasOwnProperty("faceText")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ServerRequest.FaceText.verify(message.faceText);
                if (error)
                    return "faceText." + error;
            }
        }
        if (message.faceAgreement != null && message.hasOwnProperty("faceAgreement")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ServerRequest.FaceAgreement.verify(message.faceAgreement);
                if (error)
                    return "faceAgreement." + error;
            }
        }
        if (message.faceMovement != null && message.hasOwnProperty("faceMovement")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ServerRequest.FaceMovement.verify(message.faceMovement);
                if (error)
                    return "faceMovement." + error;
            }
        }
        if (message.idCard != null && message.hasOwnProperty("idCard")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ServerRequest.IdCard.verify(message.idCard);
                if (error)
                    return "idCard." + error;
            }
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ServerRequest.Error.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerRequest} ServerRequest
     */
    ServerRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerRequest)
            return object;
        let message = new $root.ServerRequest();
        if (object.id != null)
            message.id = String(object.id);
        if (object.finish != null) {
            if (typeof object.finish !== "object")
                throw TypeError(".ServerRequest.finish: object expected");
            message.finish = $root.ServerRequest.Finish.fromObject(object.finish);
        }
        if (object.faceText != null) {
            if (typeof object.faceText !== "object")
                throw TypeError(".ServerRequest.faceText: object expected");
            message.faceText = $root.ServerRequest.FaceText.fromObject(object.faceText);
        }
        if (object.faceAgreement != null) {
            if (typeof object.faceAgreement !== "object")
                throw TypeError(".ServerRequest.faceAgreement: object expected");
            message.faceAgreement = $root.ServerRequest.FaceAgreement.fromObject(object.faceAgreement);
        }
        if (object.faceMovement != null) {
            if (typeof object.faceMovement !== "object")
                throw TypeError(".ServerRequest.faceMovement: object expected");
            message.faceMovement = $root.ServerRequest.FaceMovement.fromObject(object.faceMovement);
        }
        if (object.idCard != null) {
            if (typeof object.idCard !== "object")
                throw TypeError(".ServerRequest.idCard: object expected");
            message.idCard = $root.ServerRequest.IdCard.fromObject(object.idCard);
        }
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".ServerRequest.error: object expected");
            message.error = $root.ServerRequest.Error.fromObject(object.error);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerRequest
     * @static
     * @param {ServerRequest} message ServerRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.finish != null && message.hasOwnProperty("finish")) {
            object.finish = $root.ServerRequest.Finish.toObject(message.finish, options);
            if (options.oneofs)
                object.data = "finish";
        }
        if (message.faceText != null && message.hasOwnProperty("faceText")) {
            object.faceText = $root.ServerRequest.FaceText.toObject(message.faceText, options);
            if (options.oneofs)
                object.data = "faceText";
        }
        if (message.faceAgreement != null && message.hasOwnProperty("faceAgreement")) {
            object.faceAgreement = $root.ServerRequest.FaceAgreement.toObject(message.faceAgreement, options);
            if (options.oneofs)
                object.data = "faceAgreement";
        }
        if (message.faceMovement != null && message.hasOwnProperty("faceMovement")) {
            object.faceMovement = $root.ServerRequest.FaceMovement.toObject(message.faceMovement, options);
            if (options.oneofs)
                object.data = "faceMovement";
        }
        if (message.idCard != null && message.hasOwnProperty("idCard")) {
            object.idCard = $root.ServerRequest.IdCard.toObject(message.idCard, options);
            if (options.oneofs)
                object.data = "idCard";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.ServerRequest.Error.toObject(message.error, options);
            if (options.oneofs)
                object.data = "error";
        }
        return object;
    };

    /**
     * Converts this ServerRequest to JSON.
     * @function toJSON
     * @memberof ServerRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ServerRequest.Finish = (function(Finish) {

        /**
         * Properties of a Finish.
         * @memberof ServerRequest
         * @interface IFinish
         */

        /**
         * Constructs a new Finish.
         * @memberof ServerRequest
         * @classdesc Represents a Finish.
         * @implements IFinish
         * @constructor
         * @param {ServerRequest.IFinish=} [properties] Properties to set
         */
        function Finish(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Finish instance using the specified properties.
         * @function create
         * @memberof ServerRequest.Finish
         * @static
         * @param {ServerRequest.IFinish=} [properties] Properties to set
         * @returns {ServerRequest.Finish} Finish instance
         */
        Finish.create = function create(properties) {
            return new Finish(properties);
        };

        /**
         * Encodes the specified Finish message. Does not implicitly {@link ServerRequest.Finish.verify|verify} messages.
         * @function encode
         * @memberof ServerRequest.Finish
         * @static
         * @param {ServerRequest.IFinish} message Finish message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Finish.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Finish message, length delimited. Does not implicitly {@link ServerRequest.Finish.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerRequest.Finish
         * @static
         * @param {ServerRequest.IFinish} message Finish message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Finish.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Finish message from the specified reader or buffer.
         * @function decode
         * @memberof ServerRequest.Finish
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerRequest.Finish} Finish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Finish.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest.Finish();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Finish message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerRequest.Finish
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerRequest.Finish} Finish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Finish.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Finish message.
         * @function verify
         * @memberof ServerRequest.Finish
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Finish.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Finish message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerRequest.Finish
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerRequest.Finish} Finish
         */
        Finish.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerRequest.Finish)
                return object;
            return new $root.ServerRequest.Finish();
        };

        /**
         * Creates a plain object from a Finish message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerRequest.Finish
         * @static
         * @param {ServerRequest.Finish} message Finish
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Finish.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Finish to JSON.
         * @function toJSON
         * @memberof ServerRequest.Finish
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Finish.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Finish;
    })(ServerRequest.Finish || {});

    ServerRequest.Identifier = (function(Identifier) {

        /**
         * Properties of an Identifier.
         * @memberof ServerRequest
         * @interface IIdentifier
         * @property {string|null} [identifier] Identifier identifier
         */

        /**
         * Constructs a new Identifier.
         * @memberof ServerRequest
         * @classdesc Represents an Identifier.
         * @implements IIdentifier
         * @constructor
         * @param {ServerRequest.IIdentifier=} [properties] Properties to set
         */
        function Identifier(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Identifier identifier.
         * @member {string} identifier
         * @memberof ServerRequest.Identifier
         * @instance
         */
        Identifier.prototype.identifier = "";

        /**
         * Creates a new Identifier instance using the specified properties.
         * @function create
         * @memberof ServerRequest.Identifier
         * @static
         * @param {ServerRequest.IIdentifier=} [properties] Properties to set
         * @returns {ServerRequest.Identifier} Identifier instance
         */
        Identifier.create = function create(properties) {
            return new Identifier(properties);
        };

        /**
         * Encodes the specified Identifier message. Does not implicitly {@link ServerRequest.Identifier.verify|verify} messages.
         * @function encode
         * @memberof ServerRequest.Identifier
         * @static
         * @param {ServerRequest.IIdentifier} message Identifier message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Identifier.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
            return writer;
        };

        /**
         * Encodes the specified Identifier message, length delimited. Does not implicitly {@link ServerRequest.Identifier.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerRequest.Identifier
         * @static
         * @param {ServerRequest.IIdentifier} message Identifier message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Identifier.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Identifier message from the specified reader or buffer.
         * @function decode
         * @memberof ServerRequest.Identifier
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerRequest.Identifier} Identifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Identifier.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest.Identifier();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Identifier message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerRequest.Identifier
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerRequest.Identifier} Identifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Identifier.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Identifier message.
         * @function verify
         * @memberof ServerRequest.Identifier
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Identifier.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                if (!$util.isString(message.identifier))
                    return "identifier: string expected";
            return null;
        };

        /**
         * Creates an Identifier message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerRequest.Identifier
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerRequest.Identifier} Identifier
         */
        Identifier.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerRequest.Identifier)
                return object;
            let message = new $root.ServerRequest.Identifier();
            if (object.identifier != null)
                message.identifier = String(object.identifier);
            return message;
        };

        /**
         * Creates a plain object from an Identifier message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerRequest.Identifier
         * @static
         * @param {ServerRequest.Identifier} message Identifier
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Identifier.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.identifier = "";
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                object.identifier = message.identifier;
            return object;
        };

        /**
         * Converts this Identifier to JSON.
         * @function toJSON
         * @memberof ServerRequest.Identifier
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Identifier.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Identifier;
    })(ServerRequest.Identifier || {});

    ServerRequest.FaceText = (function(FaceText) {

        /**
         * Properties of a FaceText.
         * @memberof ServerRequest
         * @interface IFaceText
         * @property {string|null} [text] FaceText text
         */

        /**
         * Constructs a new FaceText.
         * @memberof ServerRequest
         * @classdesc Represents a FaceText.
         * @implements IFaceText
         * @constructor
         * @param {ServerRequest.IFaceText=} [properties] Properties to set
         */
        function FaceText(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FaceText text.
         * @member {string} text
         * @memberof ServerRequest.FaceText
         * @instance
         */
        FaceText.prototype.text = "";

        /**
         * Creates a new FaceText instance using the specified properties.
         * @function create
         * @memberof ServerRequest.FaceText
         * @static
         * @param {ServerRequest.IFaceText=} [properties] Properties to set
         * @returns {ServerRequest.FaceText} FaceText instance
         */
        FaceText.create = function create(properties) {
            return new FaceText(properties);
        };

        /**
         * Encodes the specified FaceText message. Does not implicitly {@link ServerRequest.FaceText.verify|verify} messages.
         * @function encode
         * @memberof ServerRequest.FaceText
         * @static
         * @param {ServerRequest.IFaceText} message FaceText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified FaceText message, length delimited. Does not implicitly {@link ServerRequest.FaceText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerRequest.FaceText
         * @static
         * @param {ServerRequest.IFaceText} message FaceText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FaceText message from the specified reader or buffer.
         * @function decode
         * @memberof ServerRequest.FaceText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerRequest.FaceText} FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest.FaceText();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FaceText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerRequest.FaceText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerRequest.FaceText} FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FaceText message.
         * @function verify
         * @memberof ServerRequest.FaceText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FaceText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a FaceText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerRequest.FaceText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerRequest.FaceText} FaceText
         */
        FaceText.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerRequest.FaceText)
                return object;
            let message = new $root.ServerRequest.FaceText();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a FaceText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerRequest.FaceText
         * @static
         * @param {ServerRequest.FaceText} message FaceText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FaceText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this FaceText to JSON.
         * @function toJSON
         * @memberof ServerRequest.FaceText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FaceText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FaceText;
    })(ServerRequest.FaceText || {});

    ServerRequest.FaceAgreement = (function(FaceAgreement) {

        /**
         * Properties of a FaceAgreement.
         * @memberof ServerRequest
         * @interface IFaceAgreement
         * @property {string|null} [text] FaceAgreement text
         */

        /**
         * Constructs a new FaceAgreement.
         * @memberof ServerRequest
         * @classdesc Represents a FaceAgreement.
         * @implements IFaceAgreement
         * @constructor
         * @param {ServerRequest.IFaceAgreement=} [properties] Properties to set
         */
        function FaceAgreement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FaceAgreement text.
         * @member {string} text
         * @memberof ServerRequest.FaceAgreement
         * @instance
         */
        FaceAgreement.prototype.text = "";

        /**
         * Creates a new FaceAgreement instance using the specified properties.
         * @function create
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {ServerRequest.IFaceAgreement=} [properties] Properties to set
         * @returns {ServerRequest.FaceAgreement} FaceAgreement instance
         */
        FaceAgreement.create = function create(properties) {
            return new FaceAgreement(properties);
        };

        /**
         * Encodes the specified FaceAgreement message. Does not implicitly {@link ServerRequest.FaceAgreement.verify|verify} messages.
         * @function encode
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {ServerRequest.IFaceAgreement} message FaceAgreement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceAgreement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified FaceAgreement message, length delimited. Does not implicitly {@link ServerRequest.FaceAgreement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {ServerRequest.IFaceAgreement} message FaceAgreement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceAgreement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer.
         * @function decode
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerRequest.FaceAgreement} FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceAgreement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest.FaceAgreement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerRequest.FaceAgreement} FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceAgreement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FaceAgreement message.
         * @function verify
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FaceAgreement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a FaceAgreement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerRequest.FaceAgreement} FaceAgreement
         */
        FaceAgreement.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerRequest.FaceAgreement)
                return object;
            let message = new $root.ServerRequest.FaceAgreement();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a FaceAgreement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerRequest.FaceAgreement
         * @static
         * @param {ServerRequest.FaceAgreement} message FaceAgreement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FaceAgreement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this FaceAgreement to JSON.
         * @function toJSON
         * @memberof ServerRequest.FaceAgreement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FaceAgreement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FaceAgreement;
    })(ServerRequest.FaceAgreement || {});

    ServerRequest.FaceMovement = (function(FaceMovement) {

        /**
         * Properties of a FaceMovement.
         * @memberof ServerRequest
         * @interface IFaceMovement
         * @property {Object.<string,ServerRequest.FaceMovement.Direction>|null} [directions] FaceMovement directions
         */

        /**
         * Constructs a new FaceMovement.
         * @memberof ServerRequest
         * @classdesc Represents a FaceMovement.
         * @implements IFaceMovement
         * @constructor
         * @param {ServerRequest.IFaceMovement=} [properties] Properties to set
         */
        function FaceMovement(properties) {
            this.directions = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FaceMovement directions.
         * @member {Object.<string,ServerRequest.FaceMovement.Direction>} directions
         * @memberof ServerRequest.FaceMovement
         * @instance
         */
        FaceMovement.prototype.directions = $util.emptyObject;

        /**
         * Creates a new FaceMovement instance using the specified properties.
         * @function create
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {ServerRequest.IFaceMovement=} [properties] Properties to set
         * @returns {ServerRequest.FaceMovement} FaceMovement instance
         */
        FaceMovement.create = function create(properties) {
            return new FaceMovement(properties);
        };

        /**
         * Encodes the specified FaceMovement message. Does not implicitly {@link ServerRequest.FaceMovement.verify|verify} messages.
         * @function encode
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {ServerRequest.IFaceMovement} message FaceMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceMovement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.directions != null && Object.hasOwnProperty.call(message, "directions"))
                for (let keys = Object.keys(message.directions), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.directions[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FaceMovement message, length delimited. Does not implicitly {@link ServerRequest.FaceMovement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {ServerRequest.IFaceMovement} message FaceMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceMovement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FaceMovement message from the specified reader or buffer.
         * @function decode
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerRequest.FaceMovement} FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceMovement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest.FaceMovement(), key;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    reader.skip().pos++;
                    if (message.directions === $util.emptyObject)
                        message.directions = {};
                    key = reader.int32();
                    reader.pos++;
                    message.directions[key] = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FaceMovement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerRequest.FaceMovement} FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceMovement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FaceMovement message.
         * @function verify
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FaceMovement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.directions != null && message.hasOwnProperty("directions")) {
                if (!$util.isObject(message.directions))
                    return "directions: object expected";
                let key = Object.keys(message.directions);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "directions: integer key{k:int32} expected";
                    switch (message.directions[key[i]]) {
                    default:
                        return "directions: enum value{k:int32} expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a FaceMovement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerRequest.FaceMovement} FaceMovement
         */
        FaceMovement.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerRequest.FaceMovement)
                return object;
            let message = new $root.ServerRequest.FaceMovement();
            if (object.directions) {
                if (typeof object.directions !== "object")
                    throw TypeError(".ServerRequest.FaceMovement.directions: object expected");
                message.directions = {};
                for (let keys = Object.keys(object.directions), i = 0; i < keys.length; ++i)
                    switch (object.directions[keys[i]]) {
                    case "UP":
                    case 0:
                        message.directions[keys[i]] = 0;
                        break;
                    case "DOWN":
                    case 1:
                        message.directions[keys[i]] = 1;
                        break;
                    case "LEFT":
                    case 2:
                        message.directions[keys[i]] = 2;
                        break;
                    case "RIGHT":
                    case 3:
                        message.directions[keys[i]] = 3;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a FaceMovement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerRequest.FaceMovement
         * @static
         * @param {ServerRequest.FaceMovement} message FaceMovement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FaceMovement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.directions = {};
            let keys2;
            if (message.directions && (keys2 = Object.keys(message.directions)).length) {
                object.directions = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.directions[keys2[j]] = options.enums === String ? $root.ServerRequest.FaceMovement.Direction[message.directions[keys2[j]]] : message.directions[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this FaceMovement to JSON.
         * @function toJSON
         * @memberof ServerRequest.FaceMovement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FaceMovement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Direction enum.
         * @name ServerRequest.FaceMovement.Direction
         * @enum {string}
         * @property {number} UP=0 UP value
         * @property {number} DOWN=1 DOWN value
         * @property {number} LEFT=2 LEFT value
         * @property {number} RIGHT=3 RIGHT value
         */
        FaceMovement.Direction = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UP"] = 0;
            values[valuesById[1] = "DOWN"] = 1;
            values[valuesById[2] = "LEFT"] = 2;
            values[valuesById[3] = "RIGHT"] = 3;
            return values;
        })();

        return FaceMovement;
    })(ServerRequest.FaceMovement || {});

    ServerRequest.IdCard = (function(IdCard) {

        /**
         * Properties of an IdCard.
         * @memberof ServerRequest
         * @interface IIdCard
         * @property {string|null} [placeholder] IdCard placeholder
         */

        /**
         * Constructs a new IdCard.
         * @memberof ServerRequest
         * @classdesc Represents an IdCard.
         * @implements IIdCard
         * @constructor
         * @param {ServerRequest.IIdCard=} [properties] Properties to set
         */
        function IdCard(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdCard placeholder.
         * @member {string} placeholder
         * @memberof ServerRequest.IdCard
         * @instance
         */
        IdCard.prototype.placeholder = "";

        /**
         * Creates a new IdCard instance using the specified properties.
         * @function create
         * @memberof ServerRequest.IdCard
         * @static
         * @param {ServerRequest.IIdCard=} [properties] Properties to set
         * @returns {ServerRequest.IdCard} IdCard instance
         */
        IdCard.create = function create(properties) {
            return new IdCard(properties);
        };

        /**
         * Encodes the specified IdCard message. Does not implicitly {@link ServerRequest.IdCard.verify|verify} messages.
         * @function encode
         * @memberof ServerRequest.IdCard
         * @static
         * @param {ServerRequest.IIdCard} message IdCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.placeholder != null && Object.hasOwnProperty.call(message, "placeholder"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.placeholder);
            return writer;
        };

        /**
         * Encodes the specified IdCard message, length delimited. Does not implicitly {@link ServerRequest.IdCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerRequest.IdCard
         * @static
         * @param {ServerRequest.IIdCard} message IdCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdCard message from the specified reader or buffer.
         * @function decode
         * @memberof ServerRequest.IdCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerRequest.IdCard} IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest.IdCard();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.placeholder = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IdCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerRequest.IdCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerRequest.IdCard} IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdCard message.
         * @function verify
         * @memberof ServerRequest.IdCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.placeholder != null && message.hasOwnProperty("placeholder"))
                if (!$util.isString(message.placeholder))
                    return "placeholder: string expected";
            return null;
        };

        /**
         * Creates an IdCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerRequest.IdCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerRequest.IdCard} IdCard
         */
        IdCard.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerRequest.IdCard)
                return object;
            let message = new $root.ServerRequest.IdCard();
            if (object.placeholder != null)
                message.placeholder = String(object.placeholder);
            return message;
        };

        /**
         * Creates a plain object from an IdCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerRequest.IdCard
         * @static
         * @param {ServerRequest.IdCard} message IdCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.placeholder = "";
            if (message.placeholder != null && message.hasOwnProperty("placeholder"))
                object.placeholder = message.placeholder;
            return object;
        };

        /**
         * Converts this IdCard to JSON.
         * @function toJSON
         * @memberof ServerRequest.IdCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdCard;
    })(ServerRequest.IdCard || {});

    ServerRequest.Error = (function(Error) {

        /**
         * Properties of an Error.
         * @memberof ServerRequest
         * @interface IError
         * @property {string|null} [code] Error code
         * @property {string|null} [Message] Error Message
         */

        /**
         * Constructs a new Error.
         * @memberof ServerRequest
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {ServerRequest.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error code.
         * @member {string} code
         * @memberof ServerRequest.Error
         * @instance
         */
        Error.prototype.code = "";

        /**
         * Error Message.
         * @member {string} Message
         * @memberof ServerRequest.Error
         * @instance
         */
        Error.prototype.Message = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof ServerRequest.Error
         * @static
         * @param {ServerRequest.IError=} [properties] Properties to set
         * @returns {ServerRequest.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link ServerRequest.Error.verify|verify} messages.
         * @function encode
         * @memberof ServerRequest.Error
         * @static
         * @param {ServerRequest.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link ServerRequest.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerRequest.Error
         * @static
         * @param {ServerRequest.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof ServerRequest.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerRequest.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerRequest.Error();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerRequest.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerRequest.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof ServerRequest.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerRequest.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerRequest.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerRequest.Error)
                return object;
            let message = new $root.ServerRequest.Error();
            if (object.code != null)
                message.code = String(object.code);
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerRequest.Error
         * @static
         * @param {ServerRequest.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = "";
                object.Message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof ServerRequest.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })(ServerRequest.Error || {});

    return ServerRequest;
})($root.ServerRequest || {});

export const ClientRequest = $root.ClientRequest = ((ClientRequest) => {

    /**
     * Properties of a ClientRequest.
     * @exports IClientRequest
     * @interface IClientRequest
     * @property {string|null} [id] ClientRequest id
     * @property {ClientRequest.IStart|null} [start] ClientRequest start
     * @property {ClientRequest.IFaceText|null} [faceText] ClientRequest faceText
     * @property {ClientRequest.IFaceAgreement|null} [faceAgreement] ClientRequest faceAgreement
     * @property {ClientRequest.IFaceMovement|null} [faceMovement] ClientRequest faceMovement
     * @property {ClientRequest.IIdCard|null} [idCard] ClientRequest idCard
     * @property {ClientRequest.IError|null} [error] ClientRequest error
     */

    /**
     * Constructs a new ClientRequest.
     * @exports ClientRequest
     * @classdesc Represents a ClientRequest.
     * @implements IClientRequest
     * @constructor
     * @param {IClientRequest=} [properties] Properties to set
     */
    function ClientRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientRequest id.
     * @member {string} id
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.id = "";

    /**
     * ClientRequest start.
     * @member {ClientRequest.IStart|null|undefined} start
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.start = null;

    /**
     * ClientRequest faceText.
     * @member {ClientRequest.IFaceText|null|undefined} faceText
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.faceText = null;

    /**
     * ClientRequest faceAgreement.
     * @member {ClientRequest.IFaceAgreement|null|undefined} faceAgreement
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.faceAgreement = null;

    /**
     * ClientRequest faceMovement.
     * @member {ClientRequest.IFaceMovement|null|undefined} faceMovement
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.faceMovement = null;

    /**
     * ClientRequest idCard.
     * @member {ClientRequest.IIdCard|null|undefined} idCard
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.idCard = null;

    /**
     * ClientRequest error.
     * @member {ClientRequest.IError|null|undefined} error
     * @memberof ClientRequest
     * @instance
     */
    ClientRequest.prototype.error = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * ClientRequest data.
     * @member {"start"|"faceText"|"faceAgreement"|"faceMovement"|"idCard"|"error"|undefined} data
     * @memberof ClientRequest
     * @instance
     */
    Object.defineProperty(ClientRequest.prototype, "data", {
        get: $util.oneOfGetter($oneOfFields = ["start", "faceText", "faceAgreement", "faceMovement", "idCard", "error"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClientRequest instance using the specified properties.
     * @function create
     * @memberof ClientRequest
     * @static
     * @param {IClientRequest=} [properties] Properties to set
     * @returns {ClientRequest} ClientRequest instance
     */
    ClientRequest.create = function create(properties) {
        return new ClientRequest(properties);
    };

    /**
     * Encodes the specified ClientRequest message. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @function encode
     * @memberof ClientRequest
     * @static
     * @param {IClientRequest} message ClientRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
            $root.ClientRequest.Start.encode(message.start, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.faceText != null && Object.hasOwnProperty.call(message, "faceText"))
            $root.ClientRequest.FaceText.encode(message.faceText, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.faceAgreement != null && Object.hasOwnProperty.call(message, "faceAgreement"))
            $root.ClientRequest.FaceAgreement.encode(message.faceAgreement, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.faceMovement != null && Object.hasOwnProperty.call(message, "faceMovement"))
            $root.ClientRequest.FaceMovement.encode(message.faceMovement, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.idCard != null && Object.hasOwnProperty.call(message, "idCard"))
            $root.ClientRequest.IdCard.encode(message.idCard, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.ClientRequest.Error.encode(message.error, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientRequest message, length delimited. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientRequest
     * @static
     * @param {IClientRequest} message ClientRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClientRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientRequest} ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 5:
                message.start = $root.ClientRequest.Start.decode(reader, reader.uint32());
                break;
            case 6:
                message.faceText = $root.ClientRequest.FaceText.decode(reader, reader.uint32());
                break;
            case 7:
                message.faceAgreement = $root.ClientRequest.FaceAgreement.decode(reader, reader.uint32());
                break;
            case 8:
                message.faceMovement = $root.ClientRequest.FaceMovement.decode(reader, reader.uint32());
                break;
            case 9:
                message.idCard = $root.ClientRequest.IdCard.decode(reader, reader.uint32());
                break;
            case 10:
                message.error = $root.ClientRequest.Error.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientRequest} ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientRequest message.
     * @function verify
     * @memberof ClientRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.start != null && message.hasOwnProperty("start")) {
            properties.data = 1;
            {
                let error = $root.ClientRequest.Start.verify(message.start);
                if (error)
                    return "start." + error;
            }
        }
        if (message.faceText != null && message.hasOwnProperty("faceText")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ClientRequest.FaceText.verify(message.faceText);
                if (error)
                    return "faceText." + error;
            }
        }
        if (message.faceAgreement != null && message.hasOwnProperty("faceAgreement")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ClientRequest.FaceAgreement.verify(message.faceAgreement);
                if (error)
                    return "faceAgreement." + error;
            }
        }
        if (message.faceMovement != null && message.hasOwnProperty("faceMovement")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ClientRequest.FaceMovement.verify(message.faceMovement);
                if (error)
                    return "faceMovement." + error;
            }
        }
        if (message.idCard != null && message.hasOwnProperty("idCard")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ClientRequest.IdCard.verify(message.idCard);
                if (error)
                    return "idCard." + error;
            }
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ClientRequest.Error.verify(message.error);
                if (error)
                    return "error." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClientRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientRequest} ClientRequest
     */
    ClientRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientRequest)
            return object;
        let message = new $root.ClientRequest();
        if (object.id != null)
            message.id = String(object.id);
        if (object.start != null) {
            if (typeof object.start !== "object")
                throw TypeError(".ClientRequest.start: object expected");
            message.start = $root.ClientRequest.Start.fromObject(object.start);
        }
        if (object.faceText != null) {
            if (typeof object.faceText !== "object")
                throw TypeError(".ClientRequest.faceText: object expected");
            message.faceText = $root.ClientRequest.FaceText.fromObject(object.faceText);
        }
        if (object.faceAgreement != null) {
            if (typeof object.faceAgreement !== "object")
                throw TypeError(".ClientRequest.faceAgreement: object expected");
            message.faceAgreement = $root.ClientRequest.FaceAgreement.fromObject(object.faceAgreement);
        }
        if (object.faceMovement != null) {
            if (typeof object.faceMovement !== "object")
                throw TypeError(".ClientRequest.faceMovement: object expected");
            message.faceMovement = $root.ClientRequest.FaceMovement.fromObject(object.faceMovement);
        }
        if (object.idCard != null) {
            if (typeof object.idCard !== "object")
                throw TypeError(".ClientRequest.idCard: object expected");
            message.idCard = $root.ClientRequest.IdCard.fromObject(object.idCard);
        }
        if (object.error != null) {
            if (typeof object.error !== "object")
                throw TypeError(".ClientRequest.error: object expected");
            message.error = $root.ClientRequest.Error.fromObject(object.error);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientRequest
     * @static
     * @param {ClientRequest} message ClientRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.id = "";
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.start != null && message.hasOwnProperty("start")) {
            object.start = $root.ClientRequest.Start.toObject(message.start, options);
            if (options.oneofs)
                object.data = "start";
        }
        if (message.faceText != null && message.hasOwnProperty("faceText")) {
            object.faceText = $root.ClientRequest.FaceText.toObject(message.faceText, options);
            if (options.oneofs)
                object.data = "faceText";
        }
        if (message.faceAgreement != null && message.hasOwnProperty("faceAgreement")) {
            object.faceAgreement = $root.ClientRequest.FaceAgreement.toObject(message.faceAgreement, options);
            if (options.oneofs)
                object.data = "faceAgreement";
        }
        if (message.faceMovement != null && message.hasOwnProperty("faceMovement")) {
            object.faceMovement = $root.ClientRequest.FaceMovement.toObject(message.faceMovement, options);
            if (options.oneofs)
                object.data = "faceMovement";
        }
        if (message.idCard != null && message.hasOwnProperty("idCard")) {
            object.idCard = $root.ClientRequest.IdCard.toObject(message.idCard, options);
            if (options.oneofs)
                object.data = "idCard";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = $root.ClientRequest.Error.toObject(message.error, options);
            if (options.oneofs)
                object.data = "error";
        }
        return object;
    };

    /**
     * Converts this ClientRequest to JSON.
     * @function toJSON
     * @memberof ClientRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ClientRequest.Start = (function(Start) {

        /**
         * Properties of a Start.
         * @memberof ClientRequest
         * @interface IStart
         * @property {string|null} [identifier] Start identifier
         */

        /**
         * Constructs a new Start.
         * @memberof ClientRequest
         * @classdesc Represents a Start.
         * @implements IStart
         * @constructor
         * @param {ClientRequest.IStart=} [properties] Properties to set
         */
        function Start(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Start identifier.
         * @member {string} identifier
         * @memberof ClientRequest.Start
         * @instance
         */
        Start.prototype.identifier = "";

        /**
         * Creates a new Start instance using the specified properties.
         * @function create
         * @memberof ClientRequest.Start
         * @static
         * @param {ClientRequest.IStart=} [properties] Properties to set
         * @returns {ClientRequest.Start} Start instance
         */
        Start.create = function create(properties) {
            return new Start(properties);
        };

        /**
         * Encodes the specified Start message. Does not implicitly {@link ClientRequest.Start.verify|verify} messages.
         * @function encode
         * @memberof ClientRequest.Start
         * @static
         * @param {ClientRequest.IStart} message Start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Start.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.identifier);
            return writer;
        };

        /**
         * Encodes the specified Start message, length delimited. Does not implicitly {@link ClientRequest.Start.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientRequest.Start
         * @static
         * @param {ClientRequest.IStart} message Start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Start.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Start message from the specified reader or buffer.
         * @function decode
         * @memberof ClientRequest.Start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientRequest.Start} Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Start.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest.Start();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Start message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientRequest.Start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientRequest.Start} Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Start.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Start message.
         * @function verify
         * @memberof ClientRequest.Start
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Start.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                if (!$util.isString(message.identifier))
                    return "identifier: string expected";
            return null;
        };

        /**
         * Creates a Start message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientRequest.Start
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientRequest.Start} Start
         */
        Start.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientRequest.Start)
                return object;
            let message = new $root.ClientRequest.Start();
            if (object.identifier != null)
                message.identifier = String(object.identifier);
            return message;
        };

        /**
         * Creates a plain object from a Start message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientRequest.Start
         * @static
         * @param {ClientRequest.Start} message Start
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Start.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.identifier = "";
            if (message.identifier != null && message.hasOwnProperty("identifier"))
                object.identifier = message.identifier;
            return object;
        };

        /**
         * Converts this Start to JSON.
         * @function toJSON
         * @memberof ClientRequest.Start
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Start.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Start;
    })(ClientRequest.Start || {});

    ClientRequest.FaceText = (function(FaceText) {

        /**
         * Properties of a FaceText.
         * @memberof ClientRequest
         * @interface IFaceText
         * @property {Uint8Array|null} [video] FaceText video
         */

        /**
         * Constructs a new FaceText.
         * @memberof ClientRequest
         * @classdesc Represents a FaceText.
         * @implements IFaceText
         * @constructor
         * @param {ClientRequest.IFaceText=} [properties] Properties to set
         */
        function FaceText(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FaceText video.
         * @member {Uint8Array} video
         * @memberof ClientRequest.FaceText
         * @instance
         */
        FaceText.prototype.video = $util.newBuffer([]);

        /**
         * Creates a new FaceText instance using the specified properties.
         * @function create
         * @memberof ClientRequest.FaceText
         * @static
         * @param {ClientRequest.IFaceText=} [properties] Properties to set
         * @returns {ClientRequest.FaceText} FaceText instance
         */
        FaceText.create = function create(properties) {
            return new FaceText(properties);
        };

        /**
         * Encodes the specified FaceText message. Does not implicitly {@link ClientRequest.FaceText.verify|verify} messages.
         * @function encode
         * @memberof ClientRequest.FaceText
         * @static
         * @param {ClientRequest.IFaceText} message FaceText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.video);
            return writer;
        };

        /**
         * Encodes the specified FaceText message, length delimited. Does not implicitly {@link ClientRequest.FaceText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientRequest.FaceText
         * @static
         * @param {ClientRequest.IFaceText} message FaceText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FaceText message from the specified reader or buffer.
         * @function decode
         * @memberof ClientRequest.FaceText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientRequest.FaceText} FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest.FaceText();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.video = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FaceText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientRequest.FaceText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientRequest.FaceText} FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FaceText message.
         * @function verify
         * @memberof ClientRequest.FaceText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FaceText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.video != null && message.hasOwnProperty("video"))
                if (!(message.video && typeof message.video.length === "number" || $util.isString(message.video)))
                    return "video: buffer expected";
            return null;
        };

        /**
         * Creates a FaceText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientRequest.FaceText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientRequest.FaceText} FaceText
         */
        FaceText.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientRequest.FaceText)
                return object;
            let message = new $root.ClientRequest.FaceText();
            if (object.video != null)
                if (typeof object.video === "string")
                    $util.base64.decode(object.video, message.video = $util.newBuffer($util.base64.length(object.video)), 0);
                else if (object.video.length)
                    message.video = object.video;
            return message;
        };

        /**
         * Creates a plain object from a FaceText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientRequest.FaceText
         * @static
         * @param {ClientRequest.FaceText} message FaceText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FaceText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.video = "";
                else {
                    object.video = [];
                    if (options.bytes !== Array)
                        object.video = $util.newBuffer(object.video);
                }
            if (message.video != null && message.hasOwnProperty("video"))
                object.video = options.bytes === String ? $util.base64.encode(message.video, 0, message.video.length) : options.bytes === Array ? Array.prototype.slice.call(message.video) : message.video;
            return object;
        };

        /**
         * Converts this FaceText to JSON.
         * @function toJSON
         * @memberof ClientRequest.FaceText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FaceText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FaceText;
    })(ClientRequest.FaceText || {});

    ClientRequest.FaceAgreement = (function(FaceAgreement) {

        /**
         * Properties of a FaceAgreement.
         * @memberof ClientRequest
         * @interface IFaceAgreement
         * @property {Uint8Array|null} [video] FaceAgreement video
         */

        /**
         * Constructs a new FaceAgreement.
         * @memberof ClientRequest
         * @classdesc Represents a FaceAgreement.
         * @implements IFaceAgreement
         * @constructor
         * @param {ClientRequest.IFaceAgreement=} [properties] Properties to set
         */
        function FaceAgreement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FaceAgreement video.
         * @member {Uint8Array} video
         * @memberof ClientRequest.FaceAgreement
         * @instance
         */
        FaceAgreement.prototype.video = $util.newBuffer([]);

        /**
         * Creates a new FaceAgreement instance using the specified properties.
         * @function create
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {ClientRequest.IFaceAgreement=} [properties] Properties to set
         * @returns {ClientRequest.FaceAgreement} FaceAgreement instance
         */
        FaceAgreement.create = function create(properties) {
            return new FaceAgreement(properties);
        };

        /**
         * Encodes the specified FaceAgreement message. Does not implicitly {@link ClientRequest.FaceAgreement.verify|verify} messages.
         * @function encode
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {ClientRequest.IFaceAgreement} message FaceAgreement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceAgreement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.video);
            return writer;
        };

        /**
         * Encodes the specified FaceAgreement message, length delimited. Does not implicitly {@link ClientRequest.FaceAgreement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {ClientRequest.IFaceAgreement} message FaceAgreement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceAgreement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer.
         * @function decode
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientRequest.FaceAgreement} FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceAgreement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest.FaceAgreement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.video = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientRequest.FaceAgreement} FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceAgreement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FaceAgreement message.
         * @function verify
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FaceAgreement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.video != null && message.hasOwnProperty("video"))
                if (!(message.video && typeof message.video.length === "number" || $util.isString(message.video)))
                    return "video: buffer expected";
            return null;
        };

        /**
         * Creates a FaceAgreement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientRequest.FaceAgreement} FaceAgreement
         */
        FaceAgreement.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientRequest.FaceAgreement)
                return object;
            let message = new $root.ClientRequest.FaceAgreement();
            if (object.video != null)
                if (typeof object.video === "string")
                    $util.base64.decode(object.video, message.video = $util.newBuffer($util.base64.length(object.video)), 0);
                else if (object.video.length)
                    message.video = object.video;
            return message;
        };

        /**
         * Creates a plain object from a FaceAgreement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientRequest.FaceAgreement
         * @static
         * @param {ClientRequest.FaceAgreement} message FaceAgreement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FaceAgreement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.video = "";
                else {
                    object.video = [];
                    if (options.bytes !== Array)
                        object.video = $util.newBuffer(object.video);
                }
            if (message.video != null && message.hasOwnProperty("video"))
                object.video = options.bytes === String ? $util.base64.encode(message.video, 0, message.video.length) : options.bytes === Array ? Array.prototype.slice.call(message.video) : message.video;
            return object;
        };

        /**
         * Converts this FaceAgreement to JSON.
         * @function toJSON
         * @memberof ClientRequest.FaceAgreement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FaceAgreement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FaceAgreement;
    })(ClientRequest.FaceAgreement || {});

    ClientRequest.FaceMovement = (function(FaceMovement) {

        /**
         * Properties of a FaceMovement.
         * @memberof ClientRequest
         * @interface IFaceMovement
         * @property {Uint8Array|null} [video] FaceMovement video
         */

        /**
         * Constructs a new FaceMovement.
         * @memberof ClientRequest
         * @classdesc Represents a FaceMovement.
         * @implements IFaceMovement
         * @constructor
         * @param {ClientRequest.IFaceMovement=} [properties] Properties to set
         */
        function FaceMovement(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FaceMovement video.
         * @member {Uint8Array} video
         * @memberof ClientRequest.FaceMovement
         * @instance
         */
        FaceMovement.prototype.video = $util.newBuffer([]);

        /**
         * Creates a new FaceMovement instance using the specified properties.
         * @function create
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {ClientRequest.IFaceMovement=} [properties] Properties to set
         * @returns {ClientRequest.FaceMovement} FaceMovement instance
         */
        FaceMovement.create = function create(properties) {
            return new FaceMovement(properties);
        };

        /**
         * Encodes the specified FaceMovement message. Does not implicitly {@link ClientRequest.FaceMovement.verify|verify} messages.
         * @function encode
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {ClientRequest.IFaceMovement} message FaceMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceMovement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.video);
            return writer;
        };

        /**
         * Encodes the specified FaceMovement message, length delimited. Does not implicitly {@link ClientRequest.FaceMovement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {ClientRequest.IFaceMovement} message FaceMovement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FaceMovement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FaceMovement message from the specified reader or buffer.
         * @function decode
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientRequest.FaceMovement} FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceMovement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest.FaceMovement();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.video = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FaceMovement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientRequest.FaceMovement} FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FaceMovement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FaceMovement message.
         * @function verify
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FaceMovement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.video != null && message.hasOwnProperty("video"))
                if (!(message.video && typeof message.video.length === "number" || $util.isString(message.video)))
                    return "video: buffer expected";
            return null;
        };

        /**
         * Creates a FaceMovement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientRequest.FaceMovement} FaceMovement
         */
        FaceMovement.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientRequest.FaceMovement)
                return object;
            let message = new $root.ClientRequest.FaceMovement();
            if (object.video != null)
                if (typeof object.video === "string")
                    $util.base64.decode(object.video, message.video = $util.newBuffer($util.base64.length(object.video)), 0);
                else if (object.video.length)
                    message.video = object.video;
            return message;
        };

        /**
         * Creates a plain object from a FaceMovement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientRequest.FaceMovement
         * @static
         * @param {ClientRequest.FaceMovement} message FaceMovement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FaceMovement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.video = "";
                else {
                    object.video = [];
                    if (options.bytes !== Array)
                        object.video = $util.newBuffer(object.video);
                }
            if (message.video != null && message.hasOwnProperty("video"))
                object.video = options.bytes === String ? $util.base64.encode(message.video, 0, message.video.length) : options.bytes === Array ? Array.prototype.slice.call(message.video) : message.video;
            return object;
        };

        /**
         * Converts this FaceMovement to JSON.
         * @function toJSON
         * @memberof ClientRequest.FaceMovement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FaceMovement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FaceMovement;
    })(ClientRequest.FaceMovement || {});

    ClientRequest.IdCard = (function(IdCard) {

        /**
         * Properties of an IdCard.
         * @memberof ClientRequest
         * @interface IIdCard
         * @property {Uint8Array|null} [image] IdCard image
         * @property {ClientRequest.Ibox|null} [faceBox] IdCard faceBox
         */

        /**
         * Constructs a new IdCard.
         * @memberof ClientRequest
         * @classdesc Represents an IdCard.
         * @implements IIdCard
         * @constructor
         * @param {ClientRequest.IIdCard=} [properties] Properties to set
         */
        function IdCard(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdCard image.
         * @member {Uint8Array} image
         * @memberof ClientRequest.IdCard
         * @instance
         */
        IdCard.prototype.image = $util.newBuffer([]);

        /**
         * IdCard faceBox.
         * @member {ClientRequest.Ibox|null|undefined} faceBox
         * @memberof ClientRequest.IdCard
         * @instance
         */
        IdCard.prototype.faceBox = null;

        /**
         * Creates a new IdCard instance using the specified properties.
         * @function create
         * @memberof ClientRequest.IdCard
         * @static
         * @param {ClientRequest.IIdCard=} [properties] Properties to set
         * @returns {ClientRequest.IdCard} IdCard instance
         */
        IdCard.create = function create(properties) {
            return new IdCard(properties);
        };

        /**
         * Encodes the specified IdCard message. Does not implicitly {@link ClientRequest.IdCard.verify|verify} messages.
         * @function encode
         * @memberof ClientRequest.IdCard
         * @static
         * @param {ClientRequest.IIdCard} message IdCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.image);
            if (message.faceBox != null && Object.hasOwnProperty.call(message, "faceBox"))
                $root.ClientRequest.box.encode(message.faceBox, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IdCard message, length delimited. Does not implicitly {@link ClientRequest.IdCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientRequest.IdCard
         * @static
         * @param {ClientRequest.IIdCard} message IdCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdCard message from the specified reader or buffer.
         * @function decode
         * @memberof ClientRequest.IdCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientRequest.IdCard} IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest.IdCard();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.image = reader.bytes();
                    break;
                case 2:
                    message.faceBox = $root.ClientRequest.box.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IdCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientRequest.IdCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientRequest.IdCard} IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdCard message.
         * @function verify
         * @memberof ClientRequest.IdCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!(message.image && typeof message.image.length === "number" || $util.isString(message.image)))
                    return "image: buffer expected";
            if (message.faceBox != null && message.hasOwnProperty("faceBox")) {
                let error = $root.ClientRequest.box.verify(message.faceBox);
                if (error)
                    return "faceBox." + error;
            }
            return null;
        };

        /**
         * Creates an IdCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientRequest.IdCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientRequest.IdCard} IdCard
         */
        IdCard.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientRequest.IdCard)
                return object;
            let message = new $root.ClientRequest.IdCard();
            if (object.image != null)
                if (typeof object.image === "string")
                    $util.base64.decode(object.image, message.image = $util.newBuffer($util.base64.length(object.image)), 0);
                else if (object.image.length)
                    message.image = object.image;
            if (object.faceBox != null) {
                if (typeof object.faceBox !== "object")
                    throw TypeError(".ClientRequest.IdCard.faceBox: object expected");
                message.faceBox = $root.ClientRequest.box.fromObject(object.faceBox);
            }
            return message;
        };

        /**
         * Creates a plain object from an IdCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientRequest.IdCard
         * @static
         * @param {ClientRequest.IdCard} message IdCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.image = "";
                else {
                    object.image = [];
                    if (options.bytes !== Array)
                        object.image = $util.newBuffer(object.image);
                }
                object.faceBox = null;
            }
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = options.bytes === String ? $util.base64.encode(message.image, 0, message.image.length) : options.bytes === Array ? Array.prototype.slice.call(message.image) : message.image;
            if (message.faceBox != null && message.hasOwnProperty("faceBox"))
                object.faceBox = $root.ClientRequest.box.toObject(message.faceBox, options);
            return object;
        };

        /**
         * Converts this IdCard to JSON.
         * @function toJSON
         * @memberof ClientRequest.IdCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdCard;
    })(ClientRequest.IdCard || {});

    ClientRequest.box = (function(box) {

        /**
         * Properties of a box.
         * @memberof ClientRequest
         * @interface Ibox
         * @property {number|null} [x] box x
         * @property {number|null} [y] box y
         * @property {number|null} [w] box w
         * @property {number|null} [h] box h
         */

        /**
         * Constructs a new box.
         * @memberof ClientRequest
         * @classdesc Represents a box.
         * @implements Ibox
         * @constructor
         * @param {ClientRequest.Ibox=} [properties] Properties to set
         */
        function box(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * box x.
         * @member {number} x
         * @memberof ClientRequest.box
         * @instance
         */
        box.prototype.x = 0;

        /**
         * box y.
         * @member {number} y
         * @memberof ClientRequest.box
         * @instance
         */
        box.prototype.y = 0;

        /**
         * box w.
         * @member {number} w
         * @memberof ClientRequest.box
         * @instance
         */
        box.prototype.w = 0;

        /**
         * box h.
         * @member {number} h
         * @memberof ClientRequest.box
         * @instance
         */
        box.prototype.h = 0;

        /**
         * Creates a new box instance using the specified properties.
         * @function create
         * @memberof ClientRequest.box
         * @static
         * @param {ClientRequest.Ibox=} [properties] Properties to set
         * @returns {ClientRequest.box} box instance
         */
        box.create = function create(properties) {
            return new box(properties);
        };

        /**
         * Encodes the specified box message. Does not implicitly {@link ClientRequest.box.verify|verify} messages.
         * @function encode
         * @memberof ClientRequest.box
         * @static
         * @param {ClientRequest.Ibox} message box message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        box.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.w);
            if (message.h != null && Object.hasOwnProperty.call(message, "h"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.h);
            return writer;
        };

        /**
         * Encodes the specified box message, length delimited. Does not implicitly {@link ClientRequest.box.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientRequest.box
         * @static
         * @param {ClientRequest.Ibox} message box message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        box.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a box message from the specified reader or buffer.
         * @function decode
         * @memberof ClientRequest.box
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientRequest.box} box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        box.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest.box();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.int32();
                    break;
                case 2:
                    message.y = reader.int32();
                    break;
                case 3:
                    message.w = reader.int32();
                    break;
                case 4:
                    message.h = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a box message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientRequest.box
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientRequest.box} box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        box.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a box message.
         * @function verify
         * @memberof ClientRequest.box
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        box.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (!$util.isInteger(message.x))
                    return "x: integer expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (!$util.isInteger(message.y))
                    return "y: integer expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (!$util.isInteger(message.w))
                    return "w: integer expected";
            if (message.h != null && message.hasOwnProperty("h"))
                if (!$util.isInteger(message.h))
                    return "h: integer expected";
            return null;
        };

        /**
         * Creates a box message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientRequest.box
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientRequest.box} box
         */
        box.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientRequest.box)
                return object;
            let message = new $root.ClientRequest.box();
            if (object.x != null)
                message.x = object.x | 0;
            if (object.y != null)
                message.y = object.y | 0;
            if (object.w != null)
                message.w = object.w | 0;
            if (object.h != null)
                message.h = object.h | 0;
            return message;
        };

        /**
         * Creates a plain object from a box message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientRequest.box
         * @static
         * @param {ClientRequest.box} message box
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        box.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.w = 0;
                object.h = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = message.y;
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = message.w;
            if (message.h != null && message.hasOwnProperty("h"))
                object.h = message.h;
            return object;
        };

        /**
         * Converts this box to JSON.
         * @function toJSON
         * @memberof ClientRequest.box
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        box.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return box;
    })(ClientRequest.box || {});

    ClientRequest.Error = (function(Error) {

        /**
         * Properties of an Error.
         * @memberof ClientRequest
         * @interface IError
         * @property {string|null} [code] Error code
         * @property {string|null} [Message] Error Message
         */

        /**
         * Constructs a new Error.
         * @memberof ClientRequest
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {ClientRequest.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error code.
         * @member {string} code
         * @memberof ClientRequest.Error
         * @instance
         */
        Error.prototype.code = "";

        /**
         * Error Message.
         * @member {string} Message
         * @memberof ClientRequest.Error
         * @instance
         */
        Error.prototype.Message = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof ClientRequest.Error
         * @static
         * @param {ClientRequest.IError=} [properties] Properties to set
         * @returns {ClientRequest.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link ClientRequest.Error.verify|verify} messages.
         * @function encode
         * @memberof ClientRequest.Error
         * @static
         * @param {ClientRequest.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link ClientRequest.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientRequest.Error
         * @static
         * @param {ClientRequest.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof ClientRequest.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientRequest.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientRequest.Error();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientRequest.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientRequest.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof ClientRequest.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientRequest.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientRequest.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientRequest.Error)
                return object;
            let message = new $root.ClientRequest.Error();
            if (object.code != null)
                message.code = String(object.code);
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientRequest.Error
         * @static
         * @param {ClientRequest.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = "";
                object.Message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof ClientRequest.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })(ClientRequest.Error || {});

    return ClientRequest;
})($root.ClientRequest || {});

export { $root as default };
