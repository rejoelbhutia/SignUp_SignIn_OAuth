import React from 'react';

const AnimatedCharacter = ({ characterState, activeReaction }) => {
    // Determine rotation based on state
    const lookingTowardsForm = characterState === 'typing' || characterState === 'normal';
    const lookingAway = characterState === 'covering';

    return (
        <div className="relative w-full max-w-[400px] mx-auto h-[400px]">
            {/* Background Circles */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full bg-purple-200/30 animate-float" />
                <div className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-pink-200/30 animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[50%] left-[20%] w-16 h-16 rounded-full bg-blue-200/30 animate-float" style={{ animationDelay: '4s' }} />
            </div>

            {/* Character Group Container */}
            <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">

                    {/* Character 1 - Large Purple Circle (Bottom Center) */}
                    <g className={`transition-all duration-700 ${lookingTowardsForm ? '' : lookingAway ? 'translate-x-2' : ''}`}>
                        <circle cx="200" cy="280" r="60" fill="#8b5cf6" className="transition-all duration-500" />

                        {/* Eyes */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-0' : 'opacity-100'}`}>
                            <ellipse cx="185" cy="270" rx="8" ry="12" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-3' : ''}`}>
                                <animate attributeName="ry" values="12;2;12" dur="4s" repeatCount="indefinite" />
                            </ellipse>
                            <ellipse cx="215" cy="270" rx="8" ry="12" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-3' : ''}`}>
                                <animate attributeName="ry" values="12;2;12" dur="4s" repeatCount="indefinite" />
                            </ellipse>
                            <circle cx="188" cy="267" r="3" fill="white" />
                            <circle cx="218" cy="267" r="3" fill="white" />
                        </g>

                        {/* Eyes looking away */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-100' : 'opacity-0'}`}>
                            <ellipse cx="185" cy="270" rx="8" ry="12" fill="#1f2937" className="translate-x-[-5px]">
                                <animate attributeName="ry" values="12;2;12" dur="4s" repeatCount="indefinite" />
                            </ellipse>
                            <ellipse cx="215" cy="270" rx="8" ry="12" fill="#1f2937" className="translate-x-[-5px]">
                                <animate attributeName="ry" values="12;2;12" dur="4s" repeatCount="indefinite" />
                            </ellipse>
                        </g>

                        {/* Mouth */}
                        <path
                            d={characterState === 'happy' ? "M 185 295 Q 200 305 215 295" : "M 185 295 Q 200 300 215 295"}
                            stroke="#1f2937"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            className="transition-all duration-500"
                        />
                    </g>

                    {/* Character 2 - Medium Pink Square (Top Right) */}
                    <g className={`transition-all duration-700 ${lookingTowardsForm ? '' : lookingAway ? 'translate-x-2' : ''}`}>
                        <rect x="260" y="100" width="80" height="80" rx="15" fill="#ec4899" className="transition-all duration-500" />

                        {/* Eyes */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-0' : 'opacity-100'}`}>
                            <circle cx="280" cy="125" r="8" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-[-3px]' : ''}`}>
                                <animate attributeName="r" values="8;2;8" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="320" cy="125" r="8" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-[-3px]' : ''}`}>
                                <animate attributeName="r" values="8;2;8" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="283" cy="122" r="2.5" fill="white" />
                            <circle cx="323" cy="122" r="2.5" fill="white" />
                        </g>

                        {/* Eyes looking away */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-100' : 'opacity-0'}`}>
                            <circle cx="280" cy="125" r="8" fill="#1f2937" className="translate-x-[5px]">
                                <animate attributeName="r" values="8;2;8" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="320" cy="125" r="8" fill="#1f2937" className="translate-x-[5px]">
                                <animate attributeName="r" values="8;2;8" dur="3.5s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {/* Mouth */}
                        <path
                            d="M 285 155 Q 300 160 315 155"
                            stroke="#1f2937"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </g>

                    {/* Character 3 - Small Blue Circle (Top Left) */}
                    <g className={`transition-all duration-700 ${lookingTowardsForm ? '' : lookingAway ? 'translate-x-2' : ''}`}>
                        <circle cx="90" cy="130" r="45" fill="#3b82f6" className="transition-all duration-500" />

                        {/* Eyes */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-0' : 'opacity-100'}`}>
                            <circle cx="78" cy="122" r="6" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-3' : ''}`}>
                                <animate attributeName="r" values="6;1.5;6" dur="4.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="102" cy="122" r="6" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-3' : ''}`}>
                                <animate attributeName="r" values="6;1.5;6" dur="4.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="80" cy="120" r="2" fill="white" />
                            <circle cx="104" cy="120" r="2" fill="white" />
                        </g>

                        {/* Eyes looking away */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-100' : 'opacity-0'}`}>
                            <circle cx="78" cy="122" r="6" fill="#1f2937" className="translate-x-[-4px]">
                                <animate attributeName="r" values="6;1.5;6" dur="4.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="102" cy="122" r="6" fill="#1f2937" className="translate-x-[-4px]">
                                <animate attributeName="r" values="6;1.5;6" dur="4.5s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {/* Mouth */}
                        <path
                            d="M 78 145 Q 90 150 102 145"
                            stroke="#1f2937"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </g>

                    {/* Character 4 - Medium Green Triangle-ish (Middle Left) */}
                    <g className={`transition-all duration-700 ${lookingTowardsForm ? '' : lookingAway ? 'translate-x-2' : ''}`}>
                        <circle cx="70" cy="250" r="50" fill="#10b981" className="transition-all duration-500" />

                        {/* Eyes */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-0' : 'opacity-100'}`}>
                            <ellipse cx="55" cy="240" rx="7" ry="10" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-3' : ''}`}>
                                <animate attributeName="ry" values="10;2;10" dur="3.8s" repeatCount="indefinite" />
                            </ellipse>
                            <ellipse cx="85" cy="240" rx="7" ry="10" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-3' : ''}`}>
                                <animate attributeName="ry" values="10;2;10" dur="3.8s" repeatCount="indefinite" />
                            </ellipse>
                            <circle cx="58" cy="237" r="2.5" fill="white" />
                            <circle cx="88" cy="237" r="2.5" fill="white" />
                        </g>

                        {/* Eyes looking away */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-100' : 'opacity-0'}`}>
                            <ellipse cx="55" cy="240" rx="7" ry="10" fill="#1f2937" className="translate-x-[-4px]">
                                <animate attributeName="ry" values="10;2;10" dur="3.8s" repeatCount="indefinite" />
                            </ellipse>
                            <ellipse cx="85" cy="240" rx="7" ry="10" fill="#1f2937" className="translate-x-[-4px]">
                                <animate attributeName="ry" values="10;2;10" dur="3.8s" repeatCount="indefinite" />
                            </ellipse>
                        </g>

                        {/* Mouth */}
                        <path
                            d="M 55 265 Q 70 270 85 265"
                            stroke="#1f2937"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </g>

                    {/* Character 5 - Small Orange Square (Right Middle) */}
                    <g className={`transition-all duration-700 ${lookingTowardsForm ? '' : lookingAway ? 'translate-x-2' : ''}`}>
                        <rect x="300" y="220" width="60" height="60" rx="12" fill="#f97316" className="transition-all duration-500" />

                        {/* Eyes */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-0' : 'opacity-100'}`}>
                            <circle cx="315" cy="240" r="6" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-[-3px]' : ''}`}>
                                <animate attributeName="r" values="6;1.5;6" dur="4.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="345" cy="240" r="6" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-[-3px]' : ''}`}>
                                <animate attributeName="r" values="6;1.5;6" dur="4.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="317" cy="238" r="2" fill="white" />
                            <circle cx="347" cy="238" r="2" fill="white" />
                        </g>

                        {/* Eyes looking away */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-100' : 'opacity-0'}`}>
                            <circle cx="315" cy="240" r="6" fill="#1f2937" className="translate-x-[4px]">
                                <animate attributeName="r" values="6;1.5;6" dur="4.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="345" cy="240" r="6" fill="#1f2937" className="translate-x-[4px]">
                                <animate attributeName="r" values="6;1.5;6" dur="4.2s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {/* Mouth */}
                        <path
                            d="M 320 260 Q 330 263 340 260"
                            stroke="#1f2937"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </g>

                    {/* Character 6 - Tiny Yellow Circle (Center Top) */}
                    <g className={`transition-all duration-700 ${lookingTowardsForm ? '' : lookingAway ? 'translate-x-1' : ''}`}>
                        <circle cx="180" cy="90" r="35" fill="#eab308" className="transition-all duration-500" />

                        {/* Eyes */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-0' : 'opacity-100'}`}>
                            <circle cx="170" cy="85" r="5" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-2' : ''}`}>
                                <animate attributeName="r" values="5;1;5" dur="3.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="190" cy="85" r="5" fill="#1f2937" className={`transition-all duration-700 ${lookingTowardsForm ? 'translate-x-2' : ''}`}>
                                <animate attributeName="r" values="5;1;5" dur="3.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="172" cy="83" r="1.5" fill="white" />
                            <circle cx="192" cy="83" r="1.5" fill="white" />
                        </g>

                        {/* Eyes looking away */}
                        <g className={`transition-all duration-700 ${lookingAway ? 'opacity-100' : 'opacity-0'}`}>
                            <circle cx="170" cy="85" r="5" fill="#1f2937" className="translate-x-[-3px]">
                                <animate attributeName="r" values="5;1;5" dur="3.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="190" cy="85" r="5" fill="#1f2937" className="translate-x-[-3px]">
                                <animate attributeName="r" values="5;1;5" dur="3.2s" repeatCount="indefinite" />
                            </circle>
                        </g>

                        {/* Mouth */}
                        <path
                            d="M 172 100 Q 180 103 188 100"
                            stroke="#1f2937"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </g>

                </svg>
            </div>

            {/* Reaction Bubbles */}
            <div className={`absolute top-[10%] right-[5%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-purple-200 shadow-lg flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${activeReaction === 'typing' ? 'opacity-100 scale-100 animate-bounce-soft' : 'opacity-0 scale-0'}`}>
                <span>✍️</span>
            </div>

            <div className={`absolute top-[40%] right-[2%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-purple-200 shadow-lg flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${activeReaction === 'secure' ? 'opacity-100 scale-100 animate-bounce-soft' : 'opacity-0 scale-0'}`}>
                <span>🙈</span>
            </div>

            <div className={`absolute bottom-[20%] right-[10%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-purple-200 shadow-lg flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${activeReaction === 'happy' ? 'opacity-100 scale-100 animate-bounce-soft' : 'opacity-0 scale-0'}`}>
                <span>😊</span>
            </div>

            <div className={`absolute top-[25%] left-[2%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border-2 border-purple-200 shadow-lg flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${activeReaction === 'thinking' ? 'opacity-100 scale-100 animate-bounce-soft' : 'opacity-0 scale-0'}`}>
                <span>🤔</span>
            </div>
        </div>
    );
};

export default AnimatedCharacter;
